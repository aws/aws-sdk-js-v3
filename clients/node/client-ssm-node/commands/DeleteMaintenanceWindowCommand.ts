import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteMaintenanceWindow } from "../model/DeleteMaintenanceWindow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMaintenanceWindowInput } from "../types/DeleteMaintenanceWindowInput";
import { DeleteMaintenanceWindowOutput } from "../types/DeleteMaintenanceWindowOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeleteMaintenanceWindowInput";
export * from "../types/DeleteMaintenanceWindowOutput";
export * from "../types/DeleteMaintenanceWindowExceptionsUnion";

export class DeleteMaintenanceWindowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMaintenanceWindowInput,
      OutputTypesUnion,
      DeleteMaintenanceWindowOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMaintenanceWindowInput,
    DeleteMaintenanceWindowOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMaintenanceWindowInput,
    DeleteMaintenanceWindowOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMaintenanceWindowInput, DeleteMaintenanceWindowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
