import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateComponentConfiguration } from "../model/UpdateComponentConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateComponentConfigurationInput } from "../types/UpdateComponentConfigurationInput";
import { UpdateComponentConfigurationOutput } from "../types/UpdateComponentConfigurationOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/UpdateComponentConfigurationInput";
export * from "../types/UpdateComponentConfigurationOutput";
export * from "../types/UpdateComponentConfigurationExceptionsUnion";

export class UpdateComponentConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateComponentConfigurationInput,
      OutputTypesUnion,
      UpdateComponentConfigurationOutput,
      ApplicationInsightsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateComponentConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateComponentConfigurationInput,
    UpdateComponentConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateComponentConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateComponentConfigurationInput,
    UpdateComponentConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateComponentConfigurationInput,
        UpdateComponentConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
