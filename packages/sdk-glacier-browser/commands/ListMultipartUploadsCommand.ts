import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {ListMultipartUploads} from '../model/ListMultipartUploads';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListMultipartUploadsInput} from '../types/ListMultipartUploadsInput';
import {ListMultipartUploadsOutput} from '../types/ListMultipartUploadsOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListMultipartUploadsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListMultipartUploadsInput,
    OutputTypesUnion,
    ListMultipartUploadsOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<ListMultipartUploadsInput, ListMultipartUploadsOutput, ReadableStream>();

    constructor(readonly input: ListMultipartUploadsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<ListMultipartUploadsInput, ListMultipartUploadsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListMultipartUploads
        };

        return stack.resolve(
            handler<ListMultipartUploadsInput, ListMultipartUploadsOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}