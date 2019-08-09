import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDomainStatisticsReport } from "../model/GetDomainStatisticsReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainStatisticsReportInput } from "../types/GetDomainStatisticsReportInput";
import { GetDomainStatisticsReportOutput } from "../types/GetDomainStatisticsReportOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetDomainStatisticsReportInput";
export * from "../types/GetDomainStatisticsReportOutput";
export * from "../types/GetDomainStatisticsReportExceptionsUnion";

export class GetDomainStatisticsReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainStatisticsReportInput,
      OutputTypesUnion,
      GetDomainStatisticsReportOutput,
      PinpointEmailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDomainStatisticsReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainStatisticsReportInput,
    GetDomainStatisticsReportOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDomainStatisticsReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDomainStatisticsReportInput,
    GetDomainStatisticsReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDomainStatisticsReportInput, GetDomainStatisticsReportOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
