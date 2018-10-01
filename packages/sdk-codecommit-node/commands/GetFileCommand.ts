import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetFile} from '../model/GetFile';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetFileInput} from '../types/GetFileInput';
import {GetFileOutput} from '../types/GetFileOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetFileCommand implements __aws_types.Command<
    InputTypesUnion,
    GetFileInput,
    OutputTypesUnion,
    GetFileOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetFileInput,
        GetFileOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetFileInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetFileInput, GetFileOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetFile
        };

        return stack.resolve(
            handler<GetFileInput, GetFileOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}