import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {UpdateApnsVoipSandboxChannel} from '../model/UpdateApnsVoipSandboxChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateApnsVoipSandboxChannelInput} from '../types/UpdateApnsVoipSandboxChannelInput';
import {UpdateApnsVoipSandboxChannelOutput} from '../types/UpdateApnsVoipSandboxChannelOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class UpdateApnsVoipSandboxChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateApnsVoipSandboxChannelInput,
    OutputTypesUnion,
    UpdateApnsVoipSandboxChannelOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateApnsVoipSandboxChannelInput,
        UpdateApnsVoipSandboxChannelOutput,
        Blob
    >();

    constructor(readonly input: UpdateApnsVoipSandboxChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateApnsVoipSandboxChannelInput, UpdateApnsVoipSandboxChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateApnsVoipSandboxChannel
        };

        return stack.resolve(
            handler<UpdateApnsVoipSandboxChannelInput, UpdateApnsVoipSandboxChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}