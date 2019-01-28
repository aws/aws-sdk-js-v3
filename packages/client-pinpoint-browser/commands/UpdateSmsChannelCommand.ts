import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {UpdateSmsChannel} from '../model/UpdateSmsChannel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateSmsChannelInput} from '../types/UpdateSmsChannelInput';
import {UpdateSmsChannelOutput} from '../types/UpdateSmsChannelOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class UpdateSmsChannelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateSmsChannelInput,
    OutputTypesUnion,
    UpdateSmsChannelOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateSmsChannelInput,
        UpdateSmsChannelOutput,
        Blob
    >();

    constructor(readonly input: UpdateSmsChannelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateSmsChannelInput, UpdateSmsChannelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateSmsChannel
        };

        return stack.resolve(
            handler<UpdateSmsChannelInput, UpdateSmsChannelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}