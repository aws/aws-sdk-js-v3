import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListGrants} from '../model/ListGrants';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListGrantsInput} from '../types/ListGrantsInput';
import {ListGrantsOutput} from '../types/ListGrantsOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/ListGrantsInput';
export * from '../types/ListGrantsOutput';
export * from '../types/ListGrantsExceptionsUnion';

export class ListGrantsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListGrantsInput,
    OutputTypesUnion,
    ListGrantsOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListGrantsInput,
        ListGrantsOutput,
        Blob
    >();

    constructor(readonly input: ListGrantsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<ListGrantsInput, ListGrantsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListGrants
        };

        return stack.resolve(
            handler<ListGrantsInput, ListGrantsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}