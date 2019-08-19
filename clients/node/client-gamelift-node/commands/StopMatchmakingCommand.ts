import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopMatchmaking } from "../model/operations/StopMatchmaking";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopMatchmakingInput } from "../types/StopMatchmakingInput";
import { StopMatchmakingOutput } from "../types/StopMatchmakingOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/StopMatchmakingInput";
export * from "../types/StopMatchmakingOutput";
export * from "../types/StopMatchmakingExceptionsUnion";

export class StopMatchmakingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopMatchmakingInput,
      OutputTypesUnion,
      StopMatchmakingOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopMatchmaking;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopMatchmakingInput,
    StopMatchmakingOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopMatchmakingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<StopMatchmakingInput, StopMatchmakingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopMatchmakingInput, StopMatchmakingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
