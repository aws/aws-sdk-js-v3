import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {UpdateApnsSandboxChannel} from '../model/UpdateApnsSandboxChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateApnsSandboxChannelInput} from '../types/UpdateApnsSandboxChannelInput';
import {UpdateApnsSandboxChannelOutput} from '../types/UpdateApnsSandboxChannelOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';
export * from '../types/UpdateApnsSandboxChannelInput';
export * from '../types/UpdateApnsSandboxChannelOutput';
export * from '../types/UpdateApnsSandboxChannelExceptionsUnion';

export class UpdateApnsSandboxChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateApnsSandboxChannelInput,
    OutputTypesUnion,
    UpdateApnsSandboxChannelOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateApnsSandboxChannelInput,
        UpdateApnsSandboxChannelOutput,
        Blob
    >();

    constructor(readonly input: UpdateApnsSandboxChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateApnsSandboxChannelInput, UpdateApnsSandboxChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateApnsSandboxChannel
        };

        return stack.resolve(
            handler<UpdateApnsSandboxChannelInput, UpdateApnsSandboxChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}