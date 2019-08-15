import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetReservationCoverage } from "../model/operations/GetReservationCoverage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReservationCoverageInput } from "../types/GetReservationCoverageInput";
import { GetReservationCoverageOutput } from "../types/GetReservationCoverageOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetReservationCoverageInput";
export * from "../types/GetReservationCoverageOutput";
export * from "../types/GetReservationCoverageExceptionsUnion";

export class GetReservationCoverageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReservationCoverageInput,
      OutputTypesUnion,
      GetReservationCoverageOutput,
      CostExplorerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetReservationCoverage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReservationCoverageInput,
    GetReservationCoverageOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetReservationCoverageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReservationCoverageInput,
    GetReservationCoverageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetReservationCoverageInput, GetReservationCoverageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
