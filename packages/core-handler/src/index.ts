import {
    Handler,
    HandlerArguments,
    HttpHandler,
    MetadataBearer,
    ResponseParser
} from '@aws/types';

export class CoreHandler<
        InputType extends object,
        OutputType extends MetadataBearer,
        StreamType = Uint8Array
    > implements Handler<InputType, OutputType, StreamType> {
    constructor(
        private readonly httpHandler: HttpHandler<StreamType>,
        private readonly responseParser: ResponseParser<StreamType>
    ) {}

    handle(args: HandlerArguments<InputType, StreamType>): Promise<OutputType> {
        if (!args.request) {
            return Promise.reject(new Error('Request does not exist'));
        }

        return this.httpHandler.handle(args.request, {
            abortSignal: args.abortSignal
        })
        .then(response => {
            return this.responseParser.parse<OutputType>(
                args.model,
                response
            );
        });
    }
}