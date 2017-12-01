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
        // Depending on payload rules, body may be binary, or a string
        const {
            http: httpTrait,
            input: inputModel,
            metadata: {
                xmlNamespace // consider normalizing xmlNamespace into the input/output shapes
            }
        } = operation;

        const baseUri: string = `${this.endpoint.path}/${httpTrait.requestUri}`;

        // binary payloads don't need to be serialized
        let body = this.getPayloadBinary(operation, input);
        if (!body) {
            body = this.bodySerializer.build(operation, input);
        }

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

    private getPayloadBinary(
        operation: OperationModel,
        input: any
    ): any {
        const inputMember = operation.input;
        // service metadata

        const shape = inputMember.shape as StructureShape;
        const payloadName = shape.payload;

        // hoist payloads to root
        if (payloadName) {
            const payloadMember = shape.members[payloadName];
            input = input[payloadName];
            if (input === void 0) {
                return;
            }
            const payloadShape = payloadMember.shape;

            if (payloadShape.type !== 'structure') {
                // most likely a blob
                return input;
            }
        }
    }

    private serializeNonBody(shape: StructureShape, input: any, baseUri: string) {
        const headers: HeaderBag = {};
        const query: QueryParameterBag = {};
        // reduce consecutive slashes to a single slash
        let uri: string = baseUri.replace(/\/+/g, '/');
        
        // move existing query string params
        let uriParts = uri.split('?', 2);
        if (uriParts.length === 2) {
            this.parseQueryString(query, uriParts[1]);
            // remove query string from the URI since it has been processed
            uri = uriParts[0];
        }

        const members = shape.members;
        for (let memberName of Object.keys(members)) {
            // check if input contains the member
            let inputValue = input[memberName];
            if (typeof inputValue === 'undefined' || inputValue === null) {
                continue;
            }

            let member = members[memberName];
            let {
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
            let values = [];
            for (let i = 0, iLen = input.length; i < iLen; i++) {
                values.push(String(input[i]));
            }
            query[name] = values;
        } else if (shape.type === 'map') {
            for (let valueName of Object.keys(input)) {
                let value = input[valueName];
                if (Array.isArray(value)) {
                    let escapedValues = [];
                    for (let i = 0, iLen = value.length; i < iLen; i++) {
                        escapedValues.push(String(value[i]));
                    }
                    query[valueName] = escapedValues;
                } else {
                    query[valueName] = String(value);
                }
            }
        } else {
            query[name] = String(input);
        }
    }

    private populateUri(uri: string, name: string, input: any): string {
        let regex = new RegExp(`\\{${name}(\\+)?\\}`);
        // using match instead of replace ends up being > twice as fast in V8
        let results = uri.match(regex);
        if (results) {
            let [fullMatch, plus] = results;
            let index = results.index as number;
            let escapedInputValue = plus ? escapeUriPath(input) : escapeUri(input);
            uri = uri.substr(0, index) + escapedInputValue + uri.substr(index + fullMatch.length);
        }
        return uri;
    }
    private populateHeader(headers: HeaderBag, shape: SerializationModel, name: string, input: any): void {
        if (shape.type === 'map') {
            for (let valueField of Object.keys(input)) {
                headers[name + valueField] = input[valueField].toString();
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
            let [key, value] = keyValues.split('=');
            if (query.hasOwnProperty(key)) {
                value = value;
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
