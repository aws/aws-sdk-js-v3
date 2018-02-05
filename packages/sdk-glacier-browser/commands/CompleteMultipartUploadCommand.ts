import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {CompleteMultipartUpload} from '../model/CompleteMultipartUpload';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CompleteMultipartUploadInput} from '../types/CompleteMultipartUploadInput';
import {CompleteMultipartUploadOutput} from '../types/CompleteMultipartUploadOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class CompleteMultipartUploadCommand implements __aws_types.Command<
    InputTypesUnion,
    CompleteMultipartUploadInput,
    OutputTypesUnion,
    CompleteMultipartUploadOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CompleteMultipartUploadInput,
        CompleteMultipartUploadOutput,
        ReadableStream
    >();

    constructor(readonly input: CompleteMultipartUploadInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<CompleteMultipartUploadInput, CompleteMultipartUploadOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CompleteMultipartUpload
        };

        return stack.resolve(
            handler<CompleteMultipartUploadInput, CompleteMultipartUploadOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}