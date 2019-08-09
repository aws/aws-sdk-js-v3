import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateIndexingConfiguration } from "../model/UpdateIndexingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateIndexingConfigurationInput } from "../types/UpdateIndexingConfigurationInput";
import { UpdateIndexingConfigurationOutput } from "../types/UpdateIndexingConfigurationOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateIndexingConfigurationInput";
export * from "../types/UpdateIndexingConfigurationOutput";
export * from "../types/UpdateIndexingConfigurationExceptionsUnion";

export class UpdateIndexingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateIndexingConfigurationInput,
      OutputTypesUnion,
      UpdateIndexingConfigurationOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateIndexingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateIndexingConfigurationInput,
    UpdateIndexingConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateIndexingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateIndexingConfigurationInput,
    UpdateIndexingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateIndexingConfigurationInput,
        UpdateIndexingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
