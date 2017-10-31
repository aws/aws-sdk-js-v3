import {AbortSignal} from '@aws/abort-controller';
import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    MetadataBearer,
    BrowserHttpOptions,
    ResponseParser
} from '@aws/types';
import {httpHandler} from './http-handler';

export class FetchHttpHandler<InputType extends object, OutputType extends MetadataBearer> implements Handler<InputType, OutputType, ReadableStream> {
    constructor(
        private readonly responseParser: ResponseParser<ReadableStream>,
        private readonly next: Handler<InputType, OutputType, ReadableStream>,
        private readonly handlerContext: HandlerExecutionContext
    ) {}

    public handle(args: HandlerArguments<InputType, ReadableStream, BrowserHttpOptions>): Promise<OutputType> {
        if (!args.request) {
            return Promise.reject(new Error('Request does not exist'));
        }

        return httpHandler(args.request, {
            abortSignal: args.abortSignal,
            httpOptions: args.httpOptions
        }).then(response => {
            return this.responseParser.parse<OutputType>(
                this.handlerContext.model,
                response
            );
        });
    }
}