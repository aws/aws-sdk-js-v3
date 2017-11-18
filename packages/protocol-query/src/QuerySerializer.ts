import {
    HttpRequest,
    HttpEndpoint,
    RequestSerializer,
    OperationModel,
    BodySerializer,
} from '@aws/types';

/**
 * set up http request for services using query protocol including ec2 query
 */
export class QuerySerializer<StreamType> implements
    RequestSerializer<StreamType>
{
    constructor(
        private readonly endpoint: HttpEndpoint,
        private readonly bodySerializer: BodySerializer<string>
    ){}

    serialize(operation: OperationModel, input: any): HttpRequest<never> {
        const {name: operationName, metadata: {apiVersion}} = operation;
        return {
            ...this.endpoint,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body:       `Action=${operationName}&Version=${apiVersion}&` +
                        this.bodySerializer.build(operation, input),
            method:     operation.http.method,
            path:       operation.http.requestUri
        };
    }
}
