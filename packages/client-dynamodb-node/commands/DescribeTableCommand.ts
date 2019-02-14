import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DescribeTable} from '../model/DescribeTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeTableInput} from '../types/DescribeTableInput';
import {DescribeTableOutput} from '../types/DescribeTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';
export * from '../types/DescribeTableInput';
export * from '../types/DescribeTableOutput';
export * from '../types/DescribeTableExceptionsUnion';

export class DescribeTableCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeTableInput,
    OutputTypesUnion,
    DescribeTableOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeTableInput,
        DescribeTableOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeTableInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<DescribeTableInput, DescribeTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeTable
        };

        return stack.resolve(
            handler<DescribeTableInput, DescribeTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}