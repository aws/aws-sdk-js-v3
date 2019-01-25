import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {SendMessage} from '../model/SendMessage';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {SendMessageInput} from '../types/SendMessageInput';
import {SendMessageOutput} from '../types/SendMessageOutput';
import {SQSResolvedConfiguration} from '../SQSConfiguration';

export class SendMessageCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    SendMessageInput,
    OutputTypesUnion,
    SendMessageOutput,
    SQSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        SendMessageInput,
        SendMessageOutput,
        _stream.Readable
    >();

    constructor(readonly input: SendMessageInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: SQSResolvedConfiguration
    ): __aws_sdk_types.Handler<SendMessageInput, SendMessageOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: SendMessage
        };

        return stack.resolve(
            handler<SendMessageInput, SendMessageOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}