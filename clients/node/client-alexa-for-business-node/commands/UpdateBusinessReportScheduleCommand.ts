import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateBusinessReportSchedule } from "../model/operations/UpdateBusinessReportSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBusinessReportScheduleInput } from "../types/UpdateBusinessReportScheduleInput";
import { UpdateBusinessReportScheduleOutput } from "../types/UpdateBusinessReportScheduleOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateBusinessReportScheduleInput";
export * from "../types/UpdateBusinessReportScheduleOutput";
export * from "../types/UpdateBusinessReportScheduleExceptionsUnion";

export class UpdateBusinessReportScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBusinessReportScheduleInput,
      OutputTypesUnion,
      UpdateBusinessReportScheduleOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateBusinessReportSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBusinessReportScheduleInput,
    UpdateBusinessReportScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateBusinessReportScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateBusinessReportScheduleInput,
    UpdateBusinessReportScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateBusinessReportScheduleInput,
        UpdateBusinessReportScheduleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
