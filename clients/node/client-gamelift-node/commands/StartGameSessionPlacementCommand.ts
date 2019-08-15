import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartGameSessionPlacement } from "../model/operations/StartGameSessionPlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartGameSessionPlacementInput } from "../types/StartGameSessionPlacementInput";
import { StartGameSessionPlacementOutput } from "../types/StartGameSessionPlacementOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/StartGameSessionPlacementInput";
export * from "../types/StartGameSessionPlacementOutput";
export * from "../types/StartGameSessionPlacementExceptionsUnion";

export class StartGameSessionPlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartGameSessionPlacementInput,
      OutputTypesUnion,
      StartGameSessionPlacementOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartGameSessionPlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartGameSessionPlacementInput,
    StartGameSessionPlacementOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartGameSessionPlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartGameSessionPlacementInput,
    StartGameSessionPlacementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartGameSessionPlacementInput, StartGameSessionPlacementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
