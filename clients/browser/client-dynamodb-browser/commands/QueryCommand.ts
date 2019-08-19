import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { Query } from "../model/operations/Query";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { QueryInput } from "../types/QueryInput";
import { QueryOutput } from "../types/QueryOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/QueryInput";
export * from "../types/QueryOutput";
export * from "../types/QueryExceptionsUnion";

export class QueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      QueryInput,
      OutputTypesUnion,
      QueryOutput,
      DynamoDBResolvedConfiguration,
      Blob
    > {
  readonly model = Query;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    QueryInput,
    QueryOutput,
    Blob
  >();

  constructor(readonly input: QueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<QueryInput, QueryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<QueryInput, QueryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
