import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetCommentsForPullRequest} from '../model/GetCommentsForPullRequest';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCommentsForPullRequestInput} from '../types/GetCommentsForPullRequestInput';
import {GetCommentsForPullRequestOutput} from '../types/GetCommentsForPullRequestOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetCommentsForPullRequestCommand implements __aws_types.Command<
    InputTypesUnion,
    GetCommentsForPullRequestInput,
    OutputTypesUnion,
    GetCommentsForPullRequestOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetCommentsForPullRequestInput,
        GetCommentsForPullRequestOutput,
        Blob
    >();

    constructor(readonly input: GetCommentsForPullRequestInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetCommentsForPullRequest
        };

        return stack.resolve(
            handler<GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}