import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {DescribeJob} from '../model/DescribeJob';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeJobInput} from '../types/DescribeJobInput';
import {DescribeJobOutput} from '../types/DescribeJobOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class DescribeJobCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeJobInput,
    OutputTypesUnion,
    DescribeJobOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeJobInput,
        DescribeJobOutput,
        Blob
    >();

    constructor(readonly input: DescribeJobInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<DescribeJobInput, DescribeJobOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeJob
        };

        return stack.resolve(
            handler<DescribeJobInput, DescribeJobOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}