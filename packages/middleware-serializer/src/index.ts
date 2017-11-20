import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    HttpEndpoint,
    OperationModel,
    Provider,
    RequestSerializer
} from '@aws/types';

export class SerializerMiddleware implements Handler<any, any, any> {
    constructor(
        private readonly requestSerializerProvider: Provider<RequestSerializer<any>>,
        private readonly next: Handler<any, any, any>,
        private readonly handlerContext: HandlerExecutionContext
    ) {}

    async handle(args: HandlerArguments<any, any>): Promise<any> {
        const requestSerializer = await this.requestSerializerProvider();
        const request = requestSerializer.serialize(this.handlerContext.model, args.input);

        if (request.body && ['GET', 'HEAD'].indexOf(request.method) >= 0) {
            // remove body for GET/HEAD requests (fetch complains)
            delete request.body;
        }

        return this.next.handle({
            request,
            ...args
        });
    }
}