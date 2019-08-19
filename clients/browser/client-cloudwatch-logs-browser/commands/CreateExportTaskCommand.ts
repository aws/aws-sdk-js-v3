import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateExportTask } from "../model/operations/CreateExportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateExportTaskInput } from "../types/CreateExportTaskInput";
import { CreateExportTaskOutput } from "../types/CreateExportTaskOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/CreateExportTaskInput";
export * from "../types/CreateExportTaskOutput";
export * from "../types/CreateExportTaskExceptionsUnion";

export class CreateExportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateExportTaskInput,
      OutputTypesUnion,
      CreateExportTaskOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = CreateExportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateExportTaskInput,
    CreateExportTaskOutput,
    Blob
  >();

  constructor(readonly input: CreateExportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateExportTaskInput, CreateExportTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateExportTaskInput, CreateExportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
