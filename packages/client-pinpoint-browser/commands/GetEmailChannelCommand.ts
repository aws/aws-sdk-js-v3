import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetEmailChannel} from '../model/GetEmailChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetEmailChannelInput} from '../types/GetEmailChannelInput';
import {GetEmailChannelOutput} from '../types/GetEmailChannelOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class GetEmailChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetEmailChannelInput,
    OutputTypesUnion,
    GetEmailChannelOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetEmailChannelInput,
        GetEmailChannelOutput,
        Blob
    >();

    constructor(readonly input: GetEmailChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<GetEmailChannelInput, GetEmailChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetEmailChannel
        };

        return stack.resolve(
            handler<GetEmailChannelInput, GetEmailChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}