import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UploadMultipartPart} from '../model/UploadMultipartPart';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UploadMultipartPartInput} from '../types/UploadMultipartPartInput';
import {UploadMultipartPartOutput} from '../types/UploadMultipartPartOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class UploadMultipartPartCommand implements __aws_types.Command<
    InputTypesUnion,
    UploadMultipartPartInput,
    OutputTypesUnion,
    UploadMultipartPartOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UploadMultipartPartInput,
        UploadMultipartPartOutput,
        Blob
    >();

    constructor(readonly input: UploadMultipartPartInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<UploadMultipartPartInput, UploadMultipartPartOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UploadMultipartPart
        };

        return stack.resolve(
            handler<UploadMultipartPartInput, UploadMultipartPartOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}