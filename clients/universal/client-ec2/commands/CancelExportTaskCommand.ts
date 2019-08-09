import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelExportTask } from "../model/CancelExportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelExportTaskInput } from "../types/CancelExportTaskInput";
import { CancelExportTaskOutput } from "../types/CancelExportTaskOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelExportTaskInput";
export * from "../types/CancelExportTaskOutput";
export * from "../types/CancelExportTaskExceptionsUnion";

export class CancelExportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelExportTaskInput,
      OutputTypesUnion,
      CancelExportTaskOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CancelExportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelExportTaskInput,
    CancelExportTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: CancelExportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelExportTaskInput, CancelExportTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelExportTaskInput, CancelExportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
