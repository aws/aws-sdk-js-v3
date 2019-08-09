import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLoggerDefinitions } from "../model/ListLoggerDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLoggerDefinitionsInput } from "../types/ListLoggerDefinitionsInput";
import { ListLoggerDefinitionsOutput } from "../types/ListLoggerDefinitionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListLoggerDefinitionsInput";
export * from "../types/ListLoggerDefinitionsOutput";
export * from "../types/ListLoggerDefinitionsExceptionsUnion";

export class ListLoggerDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLoggerDefinitionsInput,
      OutputTypesUnion,
      ListLoggerDefinitionsOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListLoggerDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLoggerDefinitionsInput,
    ListLoggerDefinitionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListLoggerDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListLoggerDefinitionsInput,
    ListLoggerDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLoggerDefinitionsInput, ListLoggerDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
