import {
    BodyLengthCalculator,
    Handler,
    HandlerArguments
} from '@aws/types';

export class ContentLengthMiddleware implements Handler<any, any, any> {
    constructor(
        private readonly bodyLengthCalculator: BodyLengthCalculator,
        private readonly next: Handler<any, any, any>
    ) {}

    async handle(args: HandlerArguments<any, any>): Promise<any> {
        const request = args.request;
        
        if (!request) {
            throw new Error('Unable to determine request content-length due to missing request.');
        }

        if (request.body) {
            request.headers['Content-Length'] = String(this.bodyLengthCalculator(request.body));
        }

        return this.next.handle({
            request,
            ...args
        });
    }
}