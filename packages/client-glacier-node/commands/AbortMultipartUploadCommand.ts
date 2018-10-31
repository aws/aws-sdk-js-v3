import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {AbortMultipartUpload} from '../model/AbortMultipartUpload';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AbortMultipartUploadInput} from '../types/AbortMultipartUploadInput';
import {AbortMultipartUploadOutput} from '../types/AbortMultipartUploadOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class AbortMultipartUploadCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    AbortMultipartUploadInput,
    OutputTypesUnion,
    AbortMultipartUploadOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        AbortMultipartUploadInput,
        AbortMultipartUploadOutput,
        _stream.Readable
    >();

    constructor(readonly input: AbortMultipartUploadInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<AbortMultipartUploadInput, AbortMultipartUploadOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AbortMultipartUpload
        };

        return stack.resolve(
            handler<AbortMultipartUploadInput, AbortMultipartUploadOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}