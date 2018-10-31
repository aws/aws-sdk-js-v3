import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetComment} from '../model/GetComment';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCommentInput} from '../types/GetCommentInput';
import {GetCommentOutput} from '../types/GetCommentOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetCommentCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetCommentInput,
    OutputTypesUnion,
    GetCommentOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetCommentInput,
        GetCommentOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetCommentInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<GetCommentInput, GetCommentOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetComment
        };

        return stack.resolve(
            handler<GetCommentInput, GetCommentOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}