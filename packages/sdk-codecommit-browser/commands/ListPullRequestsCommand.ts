import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {ListPullRequests} from '../model/ListPullRequests';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListPullRequestsInput} from '../types/ListPullRequestsInput';
import {ListPullRequestsOutput} from '../types/ListPullRequestsOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class ListPullRequestsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListPullRequestsInput,
    OutputTypesUnion,
    ListPullRequestsOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<ListPullRequestsInput, ListPullRequestsOutput, ReadableStream>();

    constructor(readonly input: ListPullRequestsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<ListPullRequestsInput, ListPullRequestsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListPullRequests
        };

        return stack.resolve(
            handler<ListPullRequestsInput, ListPullRequestsOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}