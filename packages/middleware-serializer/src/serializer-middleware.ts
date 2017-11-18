import {
    BodyLengthCalculator,
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    HttpEndpoint,
    OperationModel,
    RequestSerializer
} from '@aws/types';

export class SerializerMiddleware implements Handler<any, any, any> {
    constructor(
        private readonly requestSerializer: RequestSerializer,
        private readonly bodyLengthCalculator: BodyLengthCalculator,
        private readonly next: Handler<any, any, any>,
        private readonly handlerContext: HandlerExecutionContext
    ) {}

    async handle(args: HandlerArguments<any, any>): Promise<any> {
        const request = this.requestSerializer.serialize(this.handlerContext.model, args.input);
        // determine content length of body
        if (request.body) {
            // may not be required for some operations (unsigned payload ops)
            request.headers['Content-Length'] = String(this.bodyLengthCalculator(request.body));
        }

        return this.next.handle({
            request,
            ...args
        });
    }
}