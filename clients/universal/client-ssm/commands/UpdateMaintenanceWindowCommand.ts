import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMaintenanceWindow } from "../model/UpdateMaintenanceWindow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMaintenanceWindowInput } from "../types/UpdateMaintenanceWindowInput";
import { UpdateMaintenanceWindowOutput } from "../types/UpdateMaintenanceWindowOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateMaintenanceWindowInput";
export * from "../types/UpdateMaintenanceWindowOutput";
export * from "../types/UpdateMaintenanceWindowExceptionsUnion";

export class UpdateMaintenanceWindowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMaintenanceWindowInput,
      OutputTypesUnion,
      UpdateMaintenanceWindowOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMaintenanceWindowInput,
    UpdateMaintenanceWindowOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMaintenanceWindowInput,
    UpdateMaintenanceWindowOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMaintenanceWindowInput, UpdateMaintenanceWindowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
