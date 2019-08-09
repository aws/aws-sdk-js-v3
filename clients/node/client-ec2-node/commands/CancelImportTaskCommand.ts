import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelImportTask } from "../model/CancelImportTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelImportTaskInput } from "../types/CancelImportTaskInput";
import { CancelImportTaskOutput } from "../types/CancelImportTaskOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelImportTaskInput";
export * from "../types/CancelImportTaskOutput";
export * from "../types/CancelImportTaskExceptionsUnion";

export class CancelImportTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelImportTaskInput,
      OutputTypesUnion,
      CancelImportTaskOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelImportTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelImportTaskInput,
    CancelImportTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelImportTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelImportTaskInput, CancelImportTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelImportTaskInput, CancelImportTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
