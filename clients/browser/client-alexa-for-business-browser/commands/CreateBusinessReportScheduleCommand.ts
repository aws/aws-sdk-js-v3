import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBusinessReportSchedule } from "../model/operations/CreateBusinessReportSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBusinessReportScheduleInput } from "../types/CreateBusinessReportScheduleInput";
import { CreateBusinessReportScheduleOutput } from "../types/CreateBusinessReportScheduleOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateBusinessReportScheduleInput";
export * from "../types/CreateBusinessReportScheduleOutput";
export * from "../types/CreateBusinessReportScheduleExceptionsUnion";

export class CreateBusinessReportScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBusinessReportScheduleInput,
      OutputTypesUnion,
      CreateBusinessReportScheduleOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = CreateBusinessReportSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBusinessReportScheduleInput,
    CreateBusinessReportScheduleOutput,
    Blob
  >();

  constructor(readonly input: CreateBusinessReportScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateBusinessReportScheduleInput,
    CreateBusinessReportScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateBusinessReportScheduleInput,
        CreateBusinessReportScheduleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
