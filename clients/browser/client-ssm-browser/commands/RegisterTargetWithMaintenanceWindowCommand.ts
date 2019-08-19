import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterTargetWithMaintenanceWindow } from "../model/operations/RegisterTargetWithMaintenanceWindow";
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
      Blob
    > {
  readonly model = RegisterTargetWithMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterTargetWithMaintenanceWindowInput,
    RegisterTargetWithMaintenanceWindowOutput,
    Blob
  >();

  constructor(readonly input: RegisterTargetWithMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
