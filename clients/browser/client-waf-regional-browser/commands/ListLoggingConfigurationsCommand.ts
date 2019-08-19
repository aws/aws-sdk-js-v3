import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLoggingConfigurations } from "../model/operations/ListLoggingConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLoggingConfigurationsInput } from "../types/ListLoggingConfigurationsInput";
import { ListLoggingConfigurationsOutput } from "../types/ListLoggingConfigurationsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListLoggingConfigurationsInput";
export * from "../types/ListLoggingConfigurationsOutput";
export * from "../types/ListLoggingConfigurationsExceptionsUnion";

export class ListLoggingConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLoggingConfigurationsInput,
      OutputTypesUnion,
      ListLoggingConfigurationsOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = ListLoggingConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLoggingConfigurationsInput,
    ListLoggingConfigurationsOutput,
    Blob
  >();

  constructor(readonly input: ListLoggingConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListLoggingConfigurationsInput,
    ListLoggingConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLoggingConfigurationsInput, ListLoggingConfigurationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
