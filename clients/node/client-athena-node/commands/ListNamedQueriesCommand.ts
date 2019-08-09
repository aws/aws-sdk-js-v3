import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListNamedQueries } from "../model/ListNamedQueries";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListNamedQueriesInput } from "../types/ListNamedQueriesInput";
import { ListNamedQueriesOutput } from "../types/ListNamedQueriesOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/ListNamedQueriesInput";
export * from "../types/ListNamedQueriesOutput";
export * from "../types/ListNamedQueriesExceptionsUnion";

export class ListNamedQueriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListNamedQueriesInput,
      OutputTypesUnion,
      ListNamedQueriesOutput,
      AthenaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListNamedQueries;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListNamedQueriesInput,
    ListNamedQueriesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListNamedQueriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<ListNamedQueriesInput, ListNamedQueriesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListNamedQueriesInput, ListNamedQueriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
