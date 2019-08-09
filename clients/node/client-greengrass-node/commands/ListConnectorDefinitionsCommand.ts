import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListConnectorDefinitions } from "../model/ListConnectorDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConnectorDefinitionsInput } from "../types/ListConnectorDefinitionsInput";
import { ListConnectorDefinitionsOutput } from "../types/ListConnectorDefinitionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListConnectorDefinitionsInput";
export * from "../types/ListConnectorDefinitionsOutput";
export * from "../types/ListConnectorDefinitionsExceptionsUnion";

export class ListConnectorDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListConnectorDefinitionsInput,
      OutputTypesUnion,
      ListConnectorDefinitionsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListConnectorDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConnectorDefinitionsInput,
    ListConnectorDefinitionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListConnectorDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListConnectorDefinitionsInput,
    ListConnectorDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListConnectorDefinitionsInput, ListConnectorDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
