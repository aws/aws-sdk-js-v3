import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartMatchmaking } from "../model/operations/StartMatchmaking";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartMatchmakingInput } from "../types/StartMatchmakingInput";
import { StartMatchmakingOutput } from "../types/StartMatchmakingOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/StartMatchmakingInput";
export * from "../types/StartMatchmakingOutput";
export * from "../types/StartMatchmakingExceptionsUnion";

export class StartMatchmakingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartMatchmakingInput,
      OutputTypesUnion,
      StartMatchmakingOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = StartMatchmaking;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartMatchmakingInput,
    StartMatchmakingOutput,
    Blob
  >();

  constructor(readonly input: StartMatchmakingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<StartMatchmakingInput, StartMatchmakingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartMatchmakingInput, StartMatchmakingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
