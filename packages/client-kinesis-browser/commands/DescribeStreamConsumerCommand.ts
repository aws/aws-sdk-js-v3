import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DescribeStreamConsumer} from '../model/DescribeStreamConsumer';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeStreamConsumerInput} from '../types/DescribeStreamConsumerInput';
import {DescribeStreamConsumerOutput} from '../types/DescribeStreamConsumerOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';
export * from '../types/DescribeStreamConsumerInput';
export * from '../types/DescribeStreamConsumerOutput';
export * from '../types/DescribeStreamConsumerExceptionsUnion';

export class DescribeStreamConsumerCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeStreamConsumerInput,
    OutputTypesUnion,
    DescribeStreamConsumerOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeStreamConsumerInput,
        DescribeStreamConsumerOutput,
        Blob
    >();

    constructor(readonly input: DescribeStreamConsumerInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<DescribeStreamConsumerInput, DescribeStreamConsumerOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeStreamConsumer
        };

        return stack.resolve(
            handler<DescribeStreamConsumerInput, DescribeStreamConsumerOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}