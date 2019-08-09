import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBusinessReportSchedules } from "../model/ListBusinessReportSchedules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBusinessReportSchedulesInput } from "../types/ListBusinessReportSchedulesInput";
import { ListBusinessReportSchedulesOutput } from "../types/ListBusinessReportSchedulesOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ListBusinessReportSchedulesInput";
export * from "../types/ListBusinessReportSchedulesOutput";
export * from "../types/ListBusinessReportSchedulesExceptionsUnion";

export class ListBusinessReportSchedulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBusinessReportSchedulesInput,
      OutputTypesUnion,
      ListBusinessReportSchedulesOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = ListBusinessReportSchedules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBusinessReportSchedulesInput,
    ListBusinessReportSchedulesOutput,
    Blob
  >();

  constructor(readonly input: ListBusinessReportSchedulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBusinessReportSchedulesInput,
    ListBusinessReportSchedulesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListBusinessReportSchedulesInput,
        ListBusinessReportSchedulesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
