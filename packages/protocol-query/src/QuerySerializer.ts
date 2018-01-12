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
        const {
            http: {method, requestUri: path},
            input: inputModel,
            metadata: {apiVersion},
            name,
        } = operation;
        const {locationName = `${name}Request`} = inputModel;

        return {
            ...this.endpoint,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: `Action=${name}&Version=${apiVersion}&${
                this.bodySerializer.build(inputModel, input, false, locationName)
            }`,
            method,
            path,
        };
    }
}
