import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = DeleteReportDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReportDefinitionInput,
    DeleteReportDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteReportDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
