import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyCapacityReservation } from "../model/operations/ModifyCapacityReservation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyCapacityReservationInput } from "../types/ModifyCapacityReservationInput";
import { ModifyCapacityReservationOutput } from "../types/ModifyCapacityReservationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyCapacityReservationInput";
export * from "../types/ModifyCapacityReservationOutput";
export * from "../types/ModifyCapacityReservationExceptionsUnion";

export class ModifyCapacityReservationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyCapacityReservationInput,
      OutputTypesUnion,
      ModifyCapacityReservationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyCapacityReservation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyCapacityReservationInput,
    ModifyCapacityReservationOutput,
    Blob
  >();

  constructor(readonly input: ModifyCapacityReservationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyCapacityReservationInput,
    ModifyCapacityReservationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyCapacityReservationInput, ModifyCapacityReservationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
