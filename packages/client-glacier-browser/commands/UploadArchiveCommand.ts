import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {UploadArchive} from '../model/UploadArchive';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UploadArchiveInput} from '../types/UploadArchiveInput';
import {UploadArchiveOutput} from '../types/UploadArchiveOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class UploadArchiveCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UploadArchiveInput,
    OutputTypesUnion,
    UploadArchiveOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UploadArchiveInput,
        UploadArchiveOutput,
        Blob
    >();

    constructor(readonly input: UploadArchiveInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<UploadArchiveInput, UploadArchiveOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UploadArchive
        };

        return stack.resolve(
            handler<UploadArchiveInput, UploadArchiveOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}