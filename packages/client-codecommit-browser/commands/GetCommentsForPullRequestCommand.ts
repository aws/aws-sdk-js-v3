import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetCommentsForPullRequest} from '../model/GetCommentsForPullRequest';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCommentsForPullRequestInput} from '../types/GetCommentsForPullRequestInput';
import {GetCommentsForPullRequestOutput} from '../types/GetCommentsForPullRequestOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetCommentsForPullRequestCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetCommentsForPullRequestInput,
    OutputTypesUnion,
    GetCommentsForPullRequestOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetCommentsForPullRequestInput,
        GetCommentsForPullRequestOutput,
        Blob
    >();

    constructor(readonly input: GetCommentsForPullRequestInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetCommentsForPullRequest
        };

        return stack.resolve(
            handler<GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}