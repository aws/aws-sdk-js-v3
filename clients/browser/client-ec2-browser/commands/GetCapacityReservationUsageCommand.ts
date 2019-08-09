import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCapacityReservationUsage } from "../model/GetCapacityReservationUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCapacityReservationUsageInput } from "../types/GetCapacityReservationUsageInput";
import { GetCapacityReservationUsageOutput } from "../types/GetCapacityReservationUsageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetCapacityReservationUsageInput";
export * from "../types/GetCapacityReservationUsageOutput";
export * from "../types/GetCapacityReservationUsageExceptionsUnion";

export class GetCapacityReservationUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCapacityReservationUsageInput,
      OutputTypesUnion,
      GetCapacityReservationUsageOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetCapacityReservationUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCapacityReservationUsageInput,
    GetCapacityReservationUsageOutput,
    Blob
  >();

  constructor(readonly input: GetCapacityReservationUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCapacityReservationUsageInput,
    GetCapacityReservationUsageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCapacityReservationUsageInput,
        GetCapacityReservationUsageOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
