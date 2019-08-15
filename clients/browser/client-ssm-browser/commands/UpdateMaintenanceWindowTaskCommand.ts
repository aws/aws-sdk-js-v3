import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMaintenanceWindowTask } from "../model/operations/UpdateMaintenanceWindowTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMaintenanceWindowTaskInput } from "../types/UpdateMaintenanceWindowTaskInput";
import { UpdateMaintenanceWindowTaskOutput } from "../types/UpdateMaintenanceWindowTaskOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateMaintenanceWindowTaskInput";
export * from "../types/UpdateMaintenanceWindowTaskOutput";
export * from "../types/UpdateMaintenanceWindowTaskExceptionsUnion";

export class UpdateMaintenanceWindowTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMaintenanceWindowTaskInput,
      OutputTypesUnion,
      UpdateMaintenanceWindowTaskOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateMaintenanceWindowTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMaintenanceWindowTaskInput,
    UpdateMaintenanceWindowTaskOutput,
    Blob
  >();

  constructor(readonly input: UpdateMaintenanceWindowTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMaintenanceWindowTaskInput,
    UpdateMaintenanceWindowTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateMaintenanceWindowTaskInput,
        UpdateMaintenanceWindowTaskOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
