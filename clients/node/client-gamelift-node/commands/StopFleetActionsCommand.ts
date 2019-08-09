import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopFleetActions } from "../model/StopFleetActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopFleetActionsInput } from "../types/StopFleetActionsInput";
import { StopFleetActionsOutput } from "../types/StopFleetActionsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/StopFleetActionsInput";
export * from "../types/StopFleetActionsOutput";
export * from "../types/StopFleetActionsExceptionsUnion";

export class StopFleetActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopFleetActionsInput,
      OutputTypesUnion,
      StopFleetActionsOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopFleetActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopFleetActionsInput,
    StopFleetActionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopFleetActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<StopFleetActionsInput, StopFleetActionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopFleetActionsInput, StopFleetActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
