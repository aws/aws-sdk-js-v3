import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListPullRequests} from '../model/ListPullRequests';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListPullRequestsInput} from '../types/ListPullRequestsInput';
import {ListPullRequestsOutput} from '../types/ListPullRequestsOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class ListPullRequestsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListPullRequestsInput,
    OutputTypesUnion,
    ListPullRequestsOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListPullRequestsInput,
        ListPullRequestsOutput,
        Blob
    >();

    constructor(readonly input: ListPullRequestsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<ListPullRequestsInput, ListPullRequestsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListPullRequests
        };

        return stack.resolve(
            handler<ListPullRequestsInput, ListPullRequestsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}