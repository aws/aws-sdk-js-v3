import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetReservationUtilization } from "../model/GetReservationUtilization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReservationUtilizationInput } from "../types/GetReservationUtilizationInput";
import { GetReservationUtilizationOutput } from "../types/GetReservationUtilizationOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetReservationUtilizationInput";
export * from "../types/GetReservationUtilizationOutput";
export * from "../types/GetReservationUtilizationExceptionsUnion";

export class GetReservationUtilizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReservationUtilizationInput,
      OutputTypesUnion,
      GetReservationUtilizationOutput,
      CostExplorerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetReservationUtilization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReservationUtilizationInput,
    GetReservationUtilizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetReservationUtilizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReservationUtilizationInput,
    GetReservationUtilizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetReservationUtilizationInput, GetReservationUtilizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
