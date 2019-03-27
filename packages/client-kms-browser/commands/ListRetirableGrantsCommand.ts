import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListRetirableGrants} from '../model/ListRetirableGrants';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListRetirableGrantsInput} from '../types/ListRetirableGrantsInput';
import {ListRetirableGrantsOutput} from '../types/ListRetirableGrantsOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/ListRetirableGrantsInput';
export * from '../types/ListRetirableGrantsOutput';
export * from '../types/ListRetirableGrantsExceptionsUnion';

export class ListRetirableGrantsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListRetirableGrantsInput,
    OutputTypesUnion,
    ListRetirableGrantsOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListRetirableGrantsInput,
        ListRetirableGrantsOutput,
        Blob
    >();

    constructor(readonly input: ListRetirableGrantsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<ListRetirableGrantsInput, ListRetirableGrantsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListRetirableGrants
        };

        return stack.resolve(
            handler<ListRetirableGrantsInput, ListRetirableGrantsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}