import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {UpdateApnsVoipChannel} from '../model/UpdateApnsVoipChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateApnsVoipChannelInput} from '../types/UpdateApnsVoipChannelInput';
import {UpdateApnsVoipChannelOutput} from '../types/UpdateApnsVoipChannelOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class UpdateApnsVoipChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateApnsVoipChannelInput,
    OutputTypesUnion,
    UpdateApnsVoipChannelOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateApnsVoipChannelInput,
        UpdateApnsVoipChannelOutput,
        Blob
    >();

    constructor(readonly input: UpdateApnsVoipChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateApnsVoipChannelInput, UpdateApnsVoipChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateApnsVoipChannel
        };

        return stack.resolve(
            handler<UpdateApnsVoipChannelInput, UpdateApnsVoipChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}