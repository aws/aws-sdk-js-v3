import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
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
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<DescribePullRequestEventsInput, DescribePullRequestEventsOutput, _stream.Readable>();

    constructor(readonly input: DescribePullRequestEventsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
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