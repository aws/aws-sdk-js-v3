import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRuntimeConfiguration } from "../model/UpdateRuntimeConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRuntimeConfigurationInput } from "../types/UpdateRuntimeConfigurationInput";
import { UpdateRuntimeConfigurationOutput } from "../types/UpdateRuntimeConfigurationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateRuntimeConfigurationInput";
export * from "../types/UpdateRuntimeConfigurationOutput";
export * from "../types/UpdateRuntimeConfigurationExceptionsUnion";

export class UpdateRuntimeConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRuntimeConfigurationInput,
      OutputTypesUnion,
      UpdateRuntimeConfigurationOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateRuntimeConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRuntimeConfigurationInput,
    UpdateRuntimeConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateRuntimeConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRuntimeConfigurationInput,
    UpdateRuntimeConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateRuntimeConfigurationInput,
        UpdateRuntimeConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
