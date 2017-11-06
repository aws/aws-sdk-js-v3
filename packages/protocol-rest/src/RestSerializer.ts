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
    RequestSerializer,
    Structure as StructureShape
} from '@aws/types';

import {escapeUri} from './escape-uri';
import {escapeUriPath} from './escape-uri-path';

export interface UserInput {
    [key: string]: any;
}

interface QueryStringMap {
    [key: string]: string|any[]
}

export class RestSerializer implements RequestSerializer<string> {
    constructor(
        private readonly endpoint: HttpEndpoint,
        private readonly bodySerializer: BodySerializer<string>,
        private readonly base64Encoder: Encoder,
        private utf8Decoder: Decoder
    ) {}

    public serialize(operation: OperationModel, input: any): HttpRequest<string> {
        // Depending on payload rules, body may be binary, or a string
        const {
            http: httpTrait,
            input: inputModel,
            metadata: {
                xmlNamespace // consider normalizing xmlNamespace into the input/output shapes
            }
        } = operation;

        const baseUri: string = `${this.endpoint.path}/${httpTrait.requestUri}`;

        return {
            ...this.endpoint,
            headers: this.serializeHeaders(inputModel.shape as StructureShape, input),
            body: this.bodySerializer.build(operation, input),
            path: this.serializeUri(baseUri, inputModel.shape as StructureShape, input),
            method: httpTrait.method
        };
    }

    private serializeHeaders(shape: StructureShape, input: any): HeaderBag {
        const headers: HeaderBag = {};
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

            // only care about headers
            if (location !== 'header' && location !== 'headers') {
                continue;
            }

            if (memberShape.type === 'map') {
                for (let valueField of Object.keys(inputValue)) {
                    headers[locationName + valueField] = inputValue[valueField].toString();
                }
            } else {
                switch (memberShape.type) {
                    case 'timestamp':
                        headers[locationName] = rfc822(inputValue);
                        break;
                    case 'string':
                        headers[locationName] = memberShape.jsonValue ?
                            this.base64Encoder(this.utf8Decoder(JSON.stringify(inputValue))) : inputValue;
                        break;
                    case 'integer':
                        headers[locationName] = parseInt(inputValue).toString();
                        break;
                    case 'float':
                        headers[locationName] = parseFloat(inputValue).toString();
                        break;
                    case 'blob': {
                        inputValue = typeof inputValue === 'string' ? this.utf8Decoder(inputValue) : inputValue;
                        headers[locationName] = this.base64Encoder(inputValue);
                        break;
                    }
                    default:
                        headers[locationName] = inputValue.toString();
                }
            }
        }
        return headers;
    }

    private serializeUri(baseUri: string, shape: StructureShape, input: any): string {
        // reduce consecutive slashes to a single slash
        let uri: string = baseUri.replace(/\/+/g, '/');
        const members = shape.members;
        const queryStringMap: QueryStringMap = {};
        let queryStringExists = false;

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

            if (location === 'uri') {
                let regex = new RegExp(`\\{${locationName}(\\+)?\\}`);
                // using match instead of replace ends up being > twice as fast in V8
                let results = uri.match(regex);
                if (results) {
                    let [fullMatch, plus] = results;
                    let index = results.index as number;
                    let escapedInputValue = plus ? escapeUriPath(inputValue) : escapeUri(inputValue);
                    uri = uri.substr(0, index) + escapedInputValue + uri.substr(index + fullMatch.length);
                }
            } else if (location === 'querystring') {
                queryStringExists = true;
                if (memberShape.type === 'list') {
                    let values = [];
                    for (let i = 0, iLen = inputValue.length; i < iLen; i++) {
                        values.push(escapeUri(String(inputValue[i])));
                    }
                    queryStringMap[locationName] = values;
                } else if (memberShape.type === 'map') {
                    for (let valueName of Object.keys(inputValue)) {
                        let value = inputValue[valueName];
                        if (Array.isArray(value)) {
                            let escapedValues = [];
                            for (let i = 0, iLen = value.length; i < iLen; i++) {
                                escapedValues.push(escapeUri(String(value[i])));
                            }
                            queryStringMap[valueName] = escapedValues;
                        } else {
                            queryStringMap[valueName] = escapeUri(String(value));
                        }
                    }
                } else {
                    queryStringMap[locationName] = escapeUri(inputValue);
                }
            }

        }

        if (queryStringExists) {
            // some services already include a query string as part of the operation path
            uri += uri.indexOf('?') >= 0 ? '&' : '?';
            uri += this.generateQueryString(queryStringMap);
        }

        return uri;
    }

    private generateQueryString(queryStringMap: QueryStringMap): string {
        let parts: string[] = [];
        for (let key of Object.keys(queryStringMap).sort()) {
            let value = queryStringMap[key];
            if (Array.isArray(value)) {
                for (let i = 0, iLen = value.length; i < iLen; i++) {
                    parts.push(`${escapeUri(key)}=${value[i]}`);
                }
            } else {
                parts.push(`${escapeUri(key)}=${value}`);
            }
        }

        return parts.join('&');
    }
}
