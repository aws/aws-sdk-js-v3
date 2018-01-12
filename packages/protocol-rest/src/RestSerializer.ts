import {
    rfc822
} from '@aws/protocol-timestamp';
import {
    BodySerializer,
    Decoder,
    Encoder,
    HeaderBag,
    HttpEndpoint,
    HttpRequest,
    HttpTrait,
    Member,
    OperationModel,
    QueryParameterBag,
    RequestSerializer,
    SerializationModel,
    Structure as StructureShape
} from '@aws/types';

import {
    escapeUri,
    escapeUriPath
} from '@aws/util-uri-escape';

import {isIterable} from '@aws/is-iterable';

export interface UserInput {
    [key: string]: any;
}

export class RestSerializer<StreamType> implements
    RequestSerializer<StreamType>
{
    constructor(
        private readonly endpoint: HttpEndpoint,
        private readonly bodySerializer: BodySerializer<string>,
        private readonly base64Encoder: Encoder,
        private utf8Decoder: Decoder
    ) {}

    public serialize(
        operation: OperationModel,
        input: any
    ): HttpRequest<StreamType> {
        const {
            http: {requestUri, method},
            input: inputModel
        } = operation;

        return {
            ...this.endpoint,
            ...this.serializeProperties(
                operation,
                input,
                `${this.endpoint.path}/${requestUri}`
            ),
            method
        };
    }

    private serializeProperties(
        {input: member, name: operationName, metadata}: OperationModel,
        input: any,
        baseUri: string
    ) {
        const headers: HeaderBag = {};
        const query: QueryParameterBag = {};
        // reduce consecutive slashes to a single slash
        let path: string = baseUri.replace(/\/+/g, '/');

        // move existing query string params
        const uriParts = path.split('?', 2);
        if (uriParts.length === 2) {
            this.parseQueryString(query, uriParts[1]);
            // remove query string from the URI since it has been processed
            path = uriParts[0];
        }

        const {
            payload: payloadName,
            members
        } = member.shape as StructureShape;
        const bodyMembers: StructureShape = {
            type: 'structure',
            members: {},
            required: []
        };
        for (let memberName of Object.keys(members)) {
            // check if input contains the member
            const inputValue = input[memberName];
            if (typeof inputValue === 'undefined' || inputValue === null) {
                continue;
            }

            const member = members[memberName];
            const {
                location,
                locationName = memberName,
                shape: memberShape
            } = member;

            if (location === 'header' || location === 'headers') {
                this.populateHeader(headers, memberShape, locationName, inputValue);
            } else if (location === 'uri') {
                path = this.populateUri(path, locationName, inputValue);
            } else if (location === 'querystring') {
                this.populateQuery(query, memberShape, locationName, inputValue);
            } else if (!payloadName && !location) {
                bodyMembers.members[memberName] = member;
            }
        }

        let body: ArrayBuffer|ArrayBufferView|string|StreamType = '';
        if (payloadName) {
            if (input[payloadName]) {
                const payload = members[payloadName];
                const {locationName = payloadName} = payload;
                body = payload.shape.type === 'string' || payload.shape.type === 'blob'
                    ? input[payloadName]
                    : this.bodySerializer.build(
                        payload,
                        input[payloadName],
                        true,
                        locationName
                    );
            }
        } else if (Object.keys(bodyMembers.members).length > 0) {
            body = this.bodySerializer.build(
                { ...member, shape: bodyMembers },
                input,
                false,
                member.locationName || `${operationName}Request`
            );
        }

        return {
            headers,
            query,
            path,
            body,
        };
    }

    private populateQuery(query: QueryParameterBag, shape: SerializationModel, name: string, input: any) {
        if (shape.type === 'list') {
            const values = [];
            if (isIterable(input)) {
                for (let value of input) {
                    values.push(String(value));
                }
                query[name] = values;
            } else {
                throw new Error(
                    'Unable to serialize value that is neither an array nor an'
                    + ' iterable as a list'
                );
            }
        } else if (shape.type === 'map') {
            if (isIterable(input)) {
                for (let [inputKey, inputValue] of input) {
                    this.populateQuery(query, shape.value.shape, inputKey, inputValue);
                }
            } else if (typeof input === 'object' && input !== null) {
                for (let inputKey of Object.keys(input)) {
                    const inputValue = input[inputKey];
                    this.populateQuery(query, shape.value.shape, inputKey, inputValue);
                }
            }
        } else {
            query[name] = String(input);
        }
    }

    private populateUri(uri: string, name: string, input: any): string {
        const regex = new RegExp(`\\{${name}(\\+)?\\}`);
        // using match instead of replace ends up being > twice as fast in V8
        const results = uri.match(regex);
        if (results) {
            const [fullMatch, plus] = results;
            const index = results.index as number;
            const escapedInputValue = plus ? escapeUriPath(input) : escapeUri(input);
            uri = uri.substr(0, index) + escapedInputValue + uri.substr(index + fullMatch.length);
        }
        return uri;
    }

    private populateHeader(headers: HeaderBag, shape: SerializationModel, name: string, input: any): void {
        if (shape.type === 'map') {
            if (isIterable(input)) {
                for (let [inputKey, inputValue] of input) {
                    headers[name + inputKey] = String(inputValue);
                }
            } else if (typeof input === 'object' && input !== null) {
                for (let inputKey of Object.keys(input)) {
                    headers[name + inputKey] = String(input[inputKey]);
                }
            }
        } else {
            switch (shape.type) {
                case 'timestamp':
                    headers[name] = rfc822(input);
                    break;
                case 'string':
                    headers[name] = shape.jsonValue ?
                        this.base64Encoder(this.utf8Decoder(JSON.stringify(input))) : input;
                    break;
                case 'integer':
                    headers[name] = parseInt(input).toString();
                    break;
                case 'float':
                    headers[name] = parseFloat(input).toString();
                    break;
                case 'blob':
                    input = typeof input === 'string' ? this.utf8Decoder(input) : input;
                    headers[name] = this.base64Encoder(input);
                    break;
                default:
                    headers[name] = input.toString();
            }
        }
    }

    /**
     * Used to parse modeled paths that already include query strings.
     * Does not attempt to unescape values.
     * @param queryString
     */
    private parseQueryString(query: QueryParameterBag, queryString: string): void {
        // get individual keys
        for (let keyValues of queryString.split('&')) {
            const [key, value] = keyValues.split('=');
            if (query.hasOwnProperty(key)) {
                if (Array.isArray(query[key])) {
                    (query[key] as string[]).push(value);
                } else {
                    query[key] = [<string>query[key], value];
                }
            } else {
                query[key] = value;
            }
        }
    }
}
