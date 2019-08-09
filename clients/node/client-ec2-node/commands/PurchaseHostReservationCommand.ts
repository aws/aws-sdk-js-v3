import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PurchaseHostReservation } from "../model/PurchaseHostReservation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseHostReservationInput } from "../types/PurchaseHostReservationInput";
import { PurchaseHostReservationOutput } from "../types/PurchaseHostReservationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/PurchaseHostReservationInput";
export * from "../types/PurchaseHostReservationOutput";
export * from "../types/PurchaseHostReservationExceptionsUnion";

export class PurchaseHostReservationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseHostReservationInput,
      OutputTypesUnion,
      PurchaseHostReservationOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PurchaseHostReservation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseHostReservationInput,
    PurchaseHostReservationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PurchaseHostReservationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PurchaseHostReservationInput,
    PurchaseHostReservationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PurchaseHostReservationInput, PurchaseHostReservationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
