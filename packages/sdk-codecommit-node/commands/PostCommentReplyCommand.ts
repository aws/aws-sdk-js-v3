import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {PostCommentReply} from '../model/PostCommentReply';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PostCommentReplyInput} from '../types/PostCommentReplyInput';
import {PostCommentReplyOutput} from '../types/PostCommentReplyOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class PostCommentReplyCommand implements __aws_types.Command<
    InputTypesUnion,
    PostCommentReplyInput,
    OutputTypesUnion,
    PostCommentReplyOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PostCommentReplyInput,
        PostCommentReplyOutput,
        _stream.Readable
    >();

    constructor(readonly input: PostCommentReplyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<PostCommentReplyInput, PostCommentReplyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PostCommentReply
        };

        return stack.resolve(
            handler<PostCommentReplyInput, PostCommentReplyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}