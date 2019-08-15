import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDeliverabilityTestReport } from "../model/operations/GetDeliverabilityTestReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeliverabilityTestReportInput } from "../types/GetDeliverabilityTestReportInput";
import { GetDeliverabilityTestReportOutput } from "../types/GetDeliverabilityTestReportOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetDeliverabilityTestReportInput";
export * from "../types/GetDeliverabilityTestReportOutput";
export * from "../types/GetDeliverabilityTestReportExceptionsUnion";

export class GetDeliverabilityTestReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeliverabilityTestReportInput,
      OutputTypesUnion,
      GetDeliverabilityTestReportOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = GetDeliverabilityTestReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeliverabilityTestReportInput,
    GetDeliverabilityTestReportOutput,
    Blob
  >();

  constructor(readonly input: GetDeliverabilityTestReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeliverabilityTestReportInput,
    GetDeliverabilityTestReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDeliverabilityTestReportInput,
        GetDeliverabilityTestReportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
