import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListGlobalTables} from '../model/ListGlobalTables';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListGlobalTablesInput} from '../types/ListGlobalTablesInput';
import {ListGlobalTablesOutput} from '../types/ListGlobalTablesOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';
export * from '../types/ListGlobalTablesInput';
export * from '../types/ListGlobalTablesOutput';
export * from '../types/ListGlobalTablesExceptionsUnion';

export class ListGlobalTablesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListGlobalTablesInput,
    OutputTypesUnion,
    ListGlobalTablesOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListGlobalTablesInput,
        ListGlobalTablesOutput,
        Blob
    >();

    constructor(readonly input: ListGlobalTablesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<ListGlobalTablesInput, ListGlobalTablesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListGlobalTables
        };

        return stack.resolve(
            handler<ListGlobalTablesInput, ListGlobalTablesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}