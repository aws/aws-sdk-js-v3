import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCapacityReservation } from "../model/operations/CreateCapacityReservation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCapacityReservationInput } from "../types/CreateCapacityReservationInput";
import { CreateCapacityReservationOutput } from "../types/CreateCapacityReservationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateCapacityReservationInput";
export * from "../types/CreateCapacityReservationOutput";
export * from "../types/CreateCapacityReservationExceptionsUnion";

export class CreateCapacityReservationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCapacityReservationInput,
      OutputTypesUnion,
      CreateCapacityReservationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCapacityReservation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCapacityReservationInput,
    CreateCapacityReservationOutput,
    Blob
  >();

  constructor(readonly input: CreateCapacityReservationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCapacityReservationInput,
    CreateCapacityReservationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCapacityReservationInput, CreateCapacityReservationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
