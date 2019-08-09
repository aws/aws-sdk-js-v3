import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListQueryExecutions } from "../model/ListQueryExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListQueryExecutionsInput } from "../types/ListQueryExecutionsInput";
import { ListQueryExecutionsOutput } from "../types/ListQueryExecutionsOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/ListQueryExecutionsInput";
export * from "../types/ListQueryExecutionsOutput";
export * from "../types/ListQueryExecutionsExceptionsUnion";

export class ListQueryExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListQueryExecutionsInput,
      OutputTypesUnion,
      ListQueryExecutionsOutput,
      AthenaResolvedConfiguration,
      Blob
    > {
  readonly model = ListQueryExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListQueryExecutionsInput,
    ListQueryExecutionsOutput,
    Blob
  >();

  constructor(readonly input: ListQueryExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListQueryExecutionsInput,
    ListQueryExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListQueryExecutionsInput, ListQueryExecutionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
