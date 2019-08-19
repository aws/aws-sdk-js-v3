import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopGameSessionPlacement } from "../model/operations/StopGameSessionPlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopGameSessionPlacementInput } from "../types/StopGameSessionPlacementInput";
import { StopGameSessionPlacementOutput } from "../types/StopGameSessionPlacementOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/StopGameSessionPlacementInput";
export * from "../types/StopGameSessionPlacementOutput";
export * from "../types/StopGameSessionPlacementExceptionsUnion";

export class StopGameSessionPlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopGameSessionPlacementInput,
      OutputTypesUnion,
      StopGameSessionPlacementOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopGameSessionPlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopGameSessionPlacementInput,
    StopGameSessionPlacementOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopGameSessionPlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopGameSessionPlacementInput,
    StopGameSessionPlacementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopGameSessionPlacementInput, StopGameSessionPlacementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
