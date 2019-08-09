import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateMatchmakingConfiguration } from "../model/CreateMatchmakingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMatchmakingConfigurationInput } from "../types/CreateMatchmakingConfigurationInput";
import { CreateMatchmakingConfigurationOutput } from "../types/CreateMatchmakingConfigurationOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreateMatchmakingConfigurationInput";
export * from "../types/CreateMatchmakingConfigurationOutput";
export * from "../types/CreateMatchmakingConfigurationExceptionsUnion";

export class CreateMatchmakingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMatchmakingConfigurationInput,
      OutputTypesUnion,
      CreateMatchmakingConfigurationOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateMatchmakingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMatchmakingConfigurationInput,
    CreateMatchmakingConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateMatchmakingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateMatchmakingConfigurationInput,
    CreateMatchmakingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateMatchmakingConfigurationInput,
        CreateMatchmakingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
