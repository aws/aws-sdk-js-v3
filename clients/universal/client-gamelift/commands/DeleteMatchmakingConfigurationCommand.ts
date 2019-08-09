import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMatchmakingConfiguration } from "../model/DeleteMatchmakingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMatchmakingConfigurationInput } from "../types/DeleteMatchmakingConfigurationInput";
import { DeleteMatchmakingConfigurationOutput } from "../types/DeleteMatchmakingConfigurationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteMatchmakingConfigurationInput";
export * from "../types/DeleteMatchmakingConfigurationOutput";
export * from "../types/DeleteMatchmakingConfigurationExceptionsUnion";

export class DeleteMatchmakingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMatchmakingConfigurationInput,
      OutputTypesUnion,
      DeleteMatchmakingConfigurationOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteMatchmakingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMatchmakingConfigurationInput,
    DeleteMatchmakingConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteMatchmakingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMatchmakingConfigurationInput,
    DeleteMatchmakingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteMatchmakingConfigurationInput,
        DeleteMatchmakingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
