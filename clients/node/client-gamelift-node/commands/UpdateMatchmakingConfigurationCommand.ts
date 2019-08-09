import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateMatchmakingConfiguration } from "../model/UpdateMatchmakingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMatchmakingConfigurationInput } from "../types/UpdateMatchmakingConfigurationInput";
import { UpdateMatchmakingConfigurationOutput } from "../types/UpdateMatchmakingConfigurationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateMatchmakingConfigurationInput";
export * from "../types/UpdateMatchmakingConfigurationOutput";
export * from "../types/UpdateMatchmakingConfigurationExceptionsUnion";

export class UpdateMatchmakingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMatchmakingConfigurationInput,
      OutputTypesUnion,
      UpdateMatchmakingConfigurationOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateMatchmakingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMatchmakingConfigurationInput,
    UpdateMatchmakingConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateMatchmakingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMatchmakingConfigurationInput,
    UpdateMatchmakingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateMatchmakingConfigurationInput,
        UpdateMatchmakingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
