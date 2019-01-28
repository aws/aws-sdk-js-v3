import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetGcmChannel} from '../model/GetGcmChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetGcmChannelInput} from '../types/GetGcmChannelInput';
import {GetGcmChannelOutput} from '../types/GetGcmChannelOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';
export * from '../types/GetGcmChannelInput';
export * from '../types/GetGcmChannelOutput';
export * from '../types/GetGcmChannelExceptionsUnion';

export class GetGcmChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetGcmChannelInput,
    OutputTypesUnion,
    GetGcmChannelOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetGcmChannelInput,
        GetGcmChannelOutput,
        Blob
    >();

    constructor(readonly input: GetGcmChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<GetGcmChannelInput, GetGcmChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetGcmChannel
        };

        return stack.resolve(
            handler<GetGcmChannelInput, GetGcmChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}