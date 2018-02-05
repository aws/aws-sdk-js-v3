import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {InitiateMultipartUpload} from '../model/InitiateMultipartUpload';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {InitiateMultipartUploadInput} from '../types/InitiateMultipartUploadInput';
import {InitiateMultipartUploadOutput} from '../types/InitiateMultipartUploadOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class InitiateMultipartUploadCommand implements __aws_types.Command<
    InputTypesUnion,
    InitiateMultipartUploadInput,
    OutputTypesUnion,
    InitiateMultipartUploadOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<InitiateMultipartUploadInput, InitiateMultipartUploadOutput, ReadableStream>();

    constructor(readonly input: InitiateMultipartUploadInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<InitiateMultipartUploadInput, InitiateMultipartUploadOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: InitiateMultipartUpload
        };

        return stack.resolve(
            handler<InitiateMultipartUploadInput, InitiateMultipartUploadOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}