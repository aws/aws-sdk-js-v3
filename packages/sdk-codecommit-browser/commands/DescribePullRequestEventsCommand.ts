import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {DescribePullRequestEvents} from '../model/DescribePullRequestEvents';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribePullRequestEventsInput} from '../types/DescribePullRequestEventsInput';
import {DescribePullRequestEventsOutput} from '../types/DescribePullRequestEventsOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class DescribePullRequestEventsCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribePullRequestEventsInput,
    OutputTypesUnion,
    DescribePullRequestEventsOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<DescribePullRequestEventsInput, DescribePullRequestEventsOutput, ReadableStream>();

    constructor(readonly input: DescribePullRequestEventsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<DescribePullRequestEventsInput, DescribePullRequestEventsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribePullRequestEvents
        };

        return stack.resolve(
            handler<DescribePullRequestEventsInput, DescribePullRequestEventsOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}