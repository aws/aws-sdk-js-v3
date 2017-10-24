import {
    BodySerializer,
    HttpEndpoint,
    HttpRequest,
    OperationModel,
    RequestSerializer,
} from '@aws/types';

export class JsonRpcSerializer implements RequestSerializer<string> {
    constructor(
        private readonly endpoint: HttpEndpoint,
        private readonly bodySerializer: BodySerializer
    ) {}

    serialize(operation: OperationModel, input: any): HttpRequest<string> {
        const {
            http: httpTrait,
            metadata: {
                jsonVersion,
                targetPrefix,
            },
            name,
        } = operation;

        return {
            ...this.endpoint,
            headers: {
                'X-Amz-Target': `${targetPrefix}.${name}`,
                'Content-Type': `application/x-amz-json-${jsonVersion}`,
            },
            body: this.bodySerializer.build(operation, input),
            path: httpTrait.requestUri,
            method: httpTrait.method,
        };
    }
}
