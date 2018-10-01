import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteFile} from '../model/DeleteFile';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteFileInput} from '../types/DeleteFileInput';
import {DeleteFileOutput} from '../types/DeleteFileOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class DeleteFileCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteFileInput,
    OutputTypesUnion,
    DeleteFileOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteFileInput,
        DeleteFileOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteFileInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<DeleteFileInput, DeleteFileOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteFile
        };

        return stack.resolve(
            handler<DeleteFileInput, DeleteFileOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}