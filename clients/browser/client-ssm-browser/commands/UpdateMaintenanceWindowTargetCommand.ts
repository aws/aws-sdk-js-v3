import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMaintenanceWindowTarget } from "../model/operations/UpdateMaintenanceWindowTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMaintenanceWindowTargetInput } from "../types/UpdateMaintenanceWindowTargetInput";
import { UpdateMaintenanceWindowTargetOutput } from "../types/UpdateMaintenanceWindowTargetOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateMaintenanceWindowTargetInput";
export * from "../types/UpdateMaintenanceWindowTargetOutput";
export * from "../types/UpdateMaintenanceWindowTargetExceptionsUnion";

export class UpdateMaintenanceWindowTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMaintenanceWindowTargetInput,
      OutputTypesUnion,
      UpdateMaintenanceWindowTargetOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateMaintenanceWindowTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMaintenanceWindowTargetInput,
    UpdateMaintenanceWindowTargetOutput,
    Blob
  >();

  constructor(readonly input: UpdateMaintenanceWindowTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMaintenanceWindowTargetInput,
    UpdateMaintenanceWindowTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateMaintenanceWindowTargetInput,
        UpdateMaintenanceWindowTargetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
