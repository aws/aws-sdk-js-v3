import {Readable} from 'stream';
import {AbortSignal} from '@aws/abort-controller';
import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    MetadataBearer,
    NodeHttpOptions,
    ResponseParser
} from '@aws/types';
import {httpHandler} from './http-handler';

export class NodeHttpHandler<InputType extends object, OutputType extends MetadataBearer> implements Handler<InputType, OutputType, Readable> {
    constructor(
        private readonly responseParser: ResponseParser<Readable>,
        private readonly next: Handler<InputType, OutputType, Readable>,
        private readonly handlerContext: HandlerExecutionContext
    ) {}

    public handle(args: HandlerArguments<InputType, Readable, NodeHttpOptions>): Promise<OutputType> {
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