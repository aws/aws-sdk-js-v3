import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {PostCommentReply} from '../model/PostCommentReply';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PostCommentReplyInput} from '../types/PostCommentReplyInput';
import {PostCommentReplyOutput} from '../types/PostCommentReplyOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class PostCommentReplyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PostCommentReplyInput,
    OutputTypesUnion,
    PostCommentReplyOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PostCommentReplyInput,
        PostCommentReplyOutput,
        Blob
    >();

    constructor(readonly input: PostCommentReplyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<PostCommentReplyInput, PostCommentReplyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PostCommentReply
        };

        return stack.resolve(
            handler<PostCommentReplyInput, PostCommentReplyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}