import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DeregisterStreamConsumer} from '../model/DeregisterStreamConsumer';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeregisterStreamConsumerInput} from '../types/DeregisterStreamConsumerInput';
import {DeregisterStreamConsumerOutput} from '../types/DeregisterStreamConsumerOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';

export class DeregisterStreamConsumerCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeregisterStreamConsumerInput,
    OutputTypesUnion,
    DeregisterStreamConsumerOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeregisterStreamConsumerInput,
        DeregisterStreamConsumerOutput,
        Blob
    >();

    constructor(readonly input: DeregisterStreamConsumerInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<DeregisterStreamConsumerInput, DeregisterStreamConsumerOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeregisterStreamConsumer
        };

        return stack.resolve(
            handler<DeregisterStreamConsumerInput, DeregisterStreamConsumerOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}