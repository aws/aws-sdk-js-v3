import {
    HttpRequest,
    HttpEndpoint,
    RequestSerializer,
    OperationModel,
    BodySerializer,
} from '@aws/types';

export class EC2Marshaller implements RequestSerializer<string> {
    constructor(
        private readonly endpoint: HttpEndpoint,
        private readonly bodySerializer: BodySerializer<string>
    ){}

    serialize(operation: OperationModel, input: any): HttpRequest<string> {
        return {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body:       this.bodySerializer.build(operation.input, input),
            protocol:   this.endpoint.protocol,
            hostname:   this.endpoint.hostname,
            port:       this.endpoint.port,
            path:       this.endpoint.path,
            query:      this.endpoint.query,
            method:     operation.http.method,
        };
    }
}