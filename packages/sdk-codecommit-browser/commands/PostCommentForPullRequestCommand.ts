import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {PostCommentForPullRequest} from '../model/PostCommentForPullRequest';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PostCommentForPullRequestInput} from '../types/PostCommentForPullRequestInput';
import {PostCommentForPullRequestOutput} from '../types/PostCommentForPullRequestOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class PostCommentForPullRequestCommand implements __aws_types.Command<
    InputTypesUnion,
    PostCommentForPullRequestInput,
    OutputTypesUnion,
    PostCommentForPullRequestOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<PostCommentForPullRequestInput, PostCommentForPullRequestOutput, ReadableStream>();

    constructor(readonly input: PostCommentForPullRequestInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<PostCommentForPullRequestInput, PostCommentForPullRequestOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PostCommentForPullRequest
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            __aws_middleware_content_length.contentLengthMiddleware(
                __aws_util_body_length_browser.calculateBodyLength
            ),
            {
                step: 'build',
                tags: contentLengthTag,
                priority: -80
            }
        );

        return stack.resolve(
            handler<PostCommentForPullRequestInput, PostCommentForPullRequestOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}