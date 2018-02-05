import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UploadArchive} from '../model/UploadArchive';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UploadArchiveInput} from '../types/UploadArchiveInput';
import {UploadArchiveOutput} from '../types/UploadArchiveOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class UploadArchiveCommand implements __aws_types.Command<
    InputTypesUnion,
    UploadArchiveInput,
    OutputTypesUnion,
    UploadArchiveOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<UploadArchiveInput, UploadArchiveOutput, ReadableStream>();

    constructor(readonly input: UploadArchiveInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<UploadArchiveInput, UploadArchiveOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UploadArchive
        };

        return stack.resolve(
            handler<UploadArchiveInput, UploadArchiveOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}