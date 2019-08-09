import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteReportDefinition } from "../model/DeleteReportDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReportDefinitionInput } from "../types/DeleteReportDefinitionInput";
import { DeleteReportDefinitionOutput } from "../types/DeleteReportDefinitionOutput";
import { CostandUsageReportServiceResolvedConfiguration } from "../CostandUsageReportServiceConfiguration";
export * from "../types/DeleteReportDefinitionInput";
export * from "../types/DeleteReportDefinitionOutput";
export * from "../types/DeleteReportDefinitionExceptionsUnion";

export class DeleteReportDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReportDefinitionInput,
      OutputTypesUnion,
      DeleteReportDefinitionOutput,
      CostandUsageReportServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteReportDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReportDefinitionInput,
    DeleteReportDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteReportDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CostandUsageReportServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteReportDefinitionInput,
    DeleteReportDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReportDefinitionInput, DeleteReportDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
