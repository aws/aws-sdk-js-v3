import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTables } from "../model/ListTables";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTablesInput } from "../types/ListTablesInput";
import { ListTablesOutput } from "../types/ListTablesOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/ListTablesInput";
export * from "../types/ListTablesOutput";
export * from "../types/ListTablesExceptionsUnion";

export class ListTablesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTablesInput,
      OutputTypesUnion,
      ListTablesOutput,
      DynamoDBResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTablesInput,
    ListTablesOutput,
    Blob
  >();

  constructor(readonly input: ListTablesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTablesInput, ListTablesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: ListTables
    };

    return stack.resolve(
      handler<ListTablesInput, ListTablesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
