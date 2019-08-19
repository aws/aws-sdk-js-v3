import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBusinessReportSchedule } from "../model/operations/DeleteBusinessReportSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBusinessReportScheduleInput } from "../types/DeleteBusinessReportScheduleInput";
import { DeleteBusinessReportScheduleOutput } from "../types/DeleteBusinessReportScheduleOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteBusinessReportScheduleInput";
export * from "../types/DeleteBusinessReportScheduleOutput";
export * from "../types/DeleteBusinessReportScheduleExceptionsUnion";

export class DeleteBusinessReportScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBusinessReportScheduleInput,
      OutputTypesUnion,
      DeleteBusinessReportScheduleOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBusinessReportSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBusinessReportScheduleInput,
    DeleteBusinessReportScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBusinessReportScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBusinessReportScheduleInput,
    DeleteBusinessReportScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteBusinessReportScheduleInput,
        DeleteBusinessReportScheduleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
