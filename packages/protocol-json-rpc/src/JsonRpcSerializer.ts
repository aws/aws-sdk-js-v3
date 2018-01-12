import {
    BodySerializer,
    HttpEndpoint,
    HttpRequest,
    OperationModel,
    RequestSerializer,
} from '@aws/types';

export class JsonRpcSerializer<StreamType> implements
    RequestSerializer<StreamType>
{
    constructor(
        private readonly endpoint: HttpEndpoint,
        private readonly bodySerializer: BodySerializer
    ) {}

    serialize(operation: OperationModel, data: any): HttpRequest<never> {
        const {
            http: {method, requestUri: path},
            input,
            metadata: {
                jsonVersion,
                targetPrefix,
            },
            name,
        } = operation;
        const {locationName = `${name}Request`} = input;

        return {
            ...this.endpoint,
            headers: {
                'X-Amz-Target': `${targetPrefix}.${name}`,
                'Content-Type': `application/x-amz-json-${jsonVersion}`,
            },
            body: this.bodySerializer.build(input, data, false, locationName),
            path,
            method,
        };
    }
}
