import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetApnsSandboxChannel} from '../model/GetApnsSandboxChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetApnsSandboxChannelInput} from '../types/GetApnsSandboxChannelInput';
import {GetApnsSandboxChannelOutput} from '../types/GetApnsSandboxChannelOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';
export * from '../types/GetApnsSandboxChannelInput';
export * from '../types/GetApnsSandboxChannelOutput';
export * from '../types/GetApnsSandboxChannelExceptionsUnion';

export class GetApnsSandboxChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetApnsSandboxChannelInput,
    OutputTypesUnion,
    GetApnsSandboxChannelOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetApnsSandboxChannelInput,
        GetApnsSandboxChannelOutput,
        Blob
    >();

    constructor(readonly input: GetApnsSandboxChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<GetApnsSandboxChannelInput, GetApnsSandboxChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetApnsSandboxChannel
        };

        return stack.resolve(
            handler<GetApnsSandboxChannelInput, GetApnsSandboxChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}