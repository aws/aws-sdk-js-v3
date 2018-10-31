import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {ListParts} from '../model/ListParts';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListPartsInput} from '../types/ListPartsInput';
import {ListPartsOutput} from '../types/ListPartsOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListPartsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListPartsInput,
    OutputTypesUnion,
    ListPartsOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListPartsInput,
        ListPartsOutput,
        Blob
    >();

    constructor(readonly input: ListPartsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<ListPartsInput, ListPartsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListParts
        };

        return stack.resolve(
            handler<ListPartsInput, ListPartsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}