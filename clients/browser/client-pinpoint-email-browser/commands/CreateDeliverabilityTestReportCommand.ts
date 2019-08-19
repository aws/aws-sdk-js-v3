import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDeliverabilityTestReport } from "../model/operations/CreateDeliverabilityTestReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeliverabilityTestReportInput } from "../types/CreateDeliverabilityTestReportInput";
import { CreateDeliverabilityTestReportOutput } from "../types/CreateDeliverabilityTestReportOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/CreateDeliverabilityTestReportInput";
export * from "../types/CreateDeliverabilityTestReportOutput";
export * from "../types/CreateDeliverabilityTestReportExceptionsUnion";

export class CreateDeliverabilityTestReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeliverabilityTestReportInput,
      OutputTypesUnion,
      CreateDeliverabilityTestReportOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDeliverabilityTestReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeliverabilityTestReportInput,
    CreateDeliverabilityTestReportOutput,
    Blob
  >();

  constructor(readonly input: CreateDeliverabilityTestReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDeliverabilityTestReportInput,
    CreateDeliverabilityTestReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDeliverabilityTestReportInput,
        CreateDeliverabilityTestReportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
