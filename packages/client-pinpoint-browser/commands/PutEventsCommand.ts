import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {PutEvents} from '../model/PutEvents';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutEventsInput} from '../types/PutEventsInput';
import {PutEventsOutput} from '../types/PutEventsOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';
export * from '../types/PutEventsInput';
export * from '../types/PutEventsOutput';
export * from '../types/PutEventsExceptionsUnion';

export class PutEventsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutEventsInput,
    OutputTypesUnion,
    PutEventsOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutEventsInput,
        PutEventsOutput,
        Blob
    >();

    constructor(readonly input: PutEventsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<PutEventsInput, PutEventsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutEvents
        };

        return stack.resolve(
            handler<PutEventsInput, PutEventsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}