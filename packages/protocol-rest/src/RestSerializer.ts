import {
    rfc822
} from '@aws-sdk/protocol-timestamp';
import {
    BodySerializer,
    Decoder,
    Encoder,
    HeaderBag,
    HttpEndpoint,
    HttpRequest,
    Member,
    OperationModel,
    QueryParameterBag,
    RequestSerializer,
    SerializationModel,
    Structure as StructureShape
} from '@aws-sdk/types';

import {
    escapeUri,
    escapeUriPath
} from '@aws-sdk/util-uri-escape';

import {isIterable} from '@aws-sdk/is-iterable';

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
            http: httpTrait,
            input: inputModel
        } = operation;

        const baseUri: string = `${this.endpoint.path}/${httpTrait.requestUri}`;

        // Depending on payload rules, body may be binary, or a string
        const body = this.serializeBody(operation, input);
        const serializedParts = this.serializeNonBody(inputModel.shape as StructureShape, input, baseUri);

        return {
            ...this.endpoint,
            body,
            headers: serializedParts.headers,
            method: httpTrait.method,
            query: serializedParts.query,
            path: serializedParts.uri
        };
    }

    private serializeBody(operation: OperationModel, input: any): any {
        const inputModel = operation.input;
        const inputModelShape = inputModel.shape as StructureShape;

        let bodyMember: Member = inputModel;
        let hasPayload: boolean = false;
        let memberName:string|undefined;
        let bodyInput: any = input;
        const method = operation.http.method;
        if (method === 'GET' || method === 'HEAD') {
            // GET and HEAD requests should not have a body
            return null;
        }

        const payloadName:string = inputModelShape.payload as string;
        if (payloadName) {
            hasPayload = true;
            bodyMember = inputModelShape.members[payloadName];
            memberName = bodyMember.locationName || payloadName;
            bodyInput = input[payloadName];

            // non-structure payloads should not be transformed
            if (bodyMember.shape.type !== 'structure') {
                if (bodyInput === void 0 || bodyInput === null) {
                    return '';
                }
                return bodyInput;
            }
        } else {
            memberName = bodyMember.locationName;
        }

        return this.bodySerializer.build({
            hasPayload,
            input: bodyInput,
            member: bodyMember,
            memberName,
            operation
        });
    }

    private serializeNonBody(shape: StructureShape, input: any, baseUri: string) {
        const headers: HeaderBag = {};
        const query: QueryParameterBag = {};
        // reduce consecutive slashes to a single slash
        let uri: string = baseUri.replace(/\/+/g, '/');
        
        // move existing query string params
        const uriParts = uri.split('?', 2);
        if (uriParts.length === 2) {
            this.parseQueryString(query, uriParts[1]);
            // remove query string from the URI since it has been processed
            uri = uriParts[0];
        }

        const members = shape.members;
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
                uri = this.populateUri(uri, locationName, inputValue);
            } else if (location === 'querystring') {
                this.populateQuery(query, memberShape, locationName, inputValue);
            }
        }

        return {headers, query, uri};
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
                case 'blob': {
                    input = typeof input === 'string' ? this.utf8Decoder(input) : input;
                    headers[name] = this.base64Encoder(input);
                    break;
                }
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
