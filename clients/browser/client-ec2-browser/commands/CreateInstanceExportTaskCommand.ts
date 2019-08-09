import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateInstanceExportTask } from "../model/CreateInstanceExportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInstanceExportTaskInput } from "../types/CreateInstanceExportTaskInput";
import { CreateInstanceExportTaskOutput } from "../types/CreateInstanceExportTaskOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateInstanceExportTaskInput";
export * from "../types/CreateInstanceExportTaskOutput";
export * from "../types/CreateInstanceExportTaskExceptionsUnion";

export class CreateInstanceExportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInstanceExportTaskInput,
      OutputTypesUnion,
      CreateInstanceExportTaskOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateInstanceExportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInstanceExportTaskInput,
    CreateInstanceExportTaskOutput,
    Blob
  >();

  constructor(readonly input: CreateInstanceExportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInstanceExportTaskInput,
    CreateInstanceExportTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInstanceExportTaskInput, CreateInstanceExportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
