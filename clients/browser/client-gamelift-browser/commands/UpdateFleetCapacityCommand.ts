import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFleetCapacity } from "../model/UpdateFleetCapacity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFleetCapacityInput } from "../types/UpdateFleetCapacityInput";
import { UpdateFleetCapacityOutput } from "../types/UpdateFleetCapacityOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateFleetCapacityInput";
export * from "../types/UpdateFleetCapacityOutput";
export * from "../types/UpdateFleetCapacityExceptionsUnion";

export class UpdateFleetCapacityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFleetCapacityInput,
      OutputTypesUnion,
      UpdateFleetCapacityOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFleetCapacity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFleetCapacityInput,
    UpdateFleetCapacityOutput,
    Blob
  >();

  constructor(readonly input: UpdateFleetCapacityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFleetCapacityInput,
    UpdateFleetCapacityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFleetCapacityInput, UpdateFleetCapacityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
