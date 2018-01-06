import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {GetComment} from '../model/GetComment';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCommentInput} from '../types/GetCommentInput';
import {GetCommentOutput} from '../types/GetCommentOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetCommentCommand implements __aws_types.Command<
    InputTypesUnion,
    GetCommentInput,
    OutputTypesUnion,
    GetCommentOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetCommentInput, GetCommentOutput, ReadableStream>();

    constructor(readonly input: GetCommentInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetCommentInput, GetCommentOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetComment
        };

        return stack.resolve(
            handler<GetCommentInput, GetCommentOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}