import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterTargetWithMaintenanceWindow } from "../model/RegisterTargetWithMaintenanceWindow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterTargetWithMaintenanceWindowInput } from "../types/RegisterTargetWithMaintenanceWindowInput";
import { RegisterTargetWithMaintenanceWindowOutput } from "../types/RegisterTargetWithMaintenanceWindowOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/RegisterTargetWithMaintenanceWindowInput";
export * from "../types/RegisterTargetWithMaintenanceWindowOutput";
export * from "../types/RegisterTargetWithMaintenanceWindowExceptionsUnion";

export class RegisterTargetWithMaintenanceWindowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterTargetWithMaintenanceWindowInput,
      OutputTypesUnion,
      RegisterTargetWithMaintenanceWindowOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterTargetWithMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterTargetWithMaintenanceWindowInput,
    RegisterTargetWithMaintenanceWindowOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterTargetWithMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterTargetWithMaintenanceWindowInput,
    RegisterTargetWithMaintenanceWindowOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RegisterTargetWithMaintenanceWindowInput,
        RegisterTargetWithMaintenanceWindowOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
