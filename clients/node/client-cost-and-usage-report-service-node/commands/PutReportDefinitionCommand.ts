import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutReportDefinition } from "../model/PutReportDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutReportDefinitionInput } from "../types/PutReportDefinitionInput";
import { PutReportDefinitionOutput } from "../types/PutReportDefinitionOutput";
import { CostandUsageReportServiceResolvedConfiguration } from "../CostandUsageReportServiceConfiguration";
export * from "../types/PutReportDefinitionInput";
export * from "../types/PutReportDefinitionOutput";
export * from "../types/PutReportDefinitionExceptionsUnion";

export class PutReportDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutReportDefinitionInput,
      OutputTypesUnion,
      PutReportDefinitionOutput,
      CostandUsageReportServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutReportDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutReportDefinitionInput,
    PutReportDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutReportDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CostandUsageReportServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutReportDefinitionInput,
    PutReportDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutReportDefinitionInput, PutReportDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
