import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterTargetFromMaintenanceWindow } from "../model/operations/DeregisterTargetFromMaintenanceWindow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterTargetFromMaintenanceWindowInput } from "../types/DeregisterTargetFromMaintenanceWindowInput";
import { DeregisterTargetFromMaintenanceWindowOutput } from "../types/DeregisterTargetFromMaintenanceWindowOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeregisterTargetFromMaintenanceWindowInput";
export * from "../types/DeregisterTargetFromMaintenanceWindowOutput";
export * from "../types/DeregisterTargetFromMaintenanceWindowExceptionsUnion";

export class DeregisterTargetFromMaintenanceWindowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterTargetFromMaintenanceWindowInput,
      OutputTypesUnion,
      DeregisterTargetFromMaintenanceWindowOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterTargetFromMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterTargetFromMaintenanceWindowInput,
    DeregisterTargetFromMaintenanceWindowOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterTargetFromMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterTargetFromMaintenanceWindowInput,
    DeregisterTargetFromMaintenanceWindowOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeregisterTargetFromMaintenanceWindowInput,
        DeregisterTargetFromMaintenanceWindowOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
