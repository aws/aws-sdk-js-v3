import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelCapacityReservation } from "../model/CancelCapacityReservation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelCapacityReservationInput } from "../types/CancelCapacityReservationInput";
import { CancelCapacityReservationOutput } from "../types/CancelCapacityReservationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelCapacityReservationInput";
export * from "../types/CancelCapacityReservationOutput";
export * from "../types/CancelCapacityReservationExceptionsUnion";

export class CancelCapacityReservationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelCapacityReservationInput,
      OutputTypesUnion,
      CancelCapacityReservationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CancelCapacityReservation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelCapacityReservationInput,
    CancelCapacityReservationOutput,
    Blob
  >();

  constructor(readonly input: CancelCapacityReservationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelCapacityReservationInput,
    CancelCapacityReservationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelCapacityReservationInput, CancelCapacityReservationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
