import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetFolder} from '../model/GetFolder';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetFolderInput} from '../types/GetFolderInput';
import {GetFolderOutput} from '../types/GetFolderOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetFolderCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetFolderInput,
    OutputTypesUnion,
    GetFolderOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetFolderInput,
        GetFolderOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetFolderInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<GetFolderInput, GetFolderOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetFolder
        };

        return stack.resolve(
            handler<GetFolderInput, GetFolderOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}