import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelMaintenanceWindowExecution } from "../model/CancelMaintenanceWindowExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelMaintenanceWindowExecutionInput } from "../types/CancelMaintenanceWindowExecutionInput";
import { CancelMaintenanceWindowExecutionOutput } from "../types/CancelMaintenanceWindowExecutionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CancelMaintenanceWindowExecutionInput";
export * from "../types/CancelMaintenanceWindowExecutionOutput";
export * from "../types/CancelMaintenanceWindowExecutionExceptionsUnion";

export class CancelMaintenanceWindowExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelMaintenanceWindowExecutionInput,
      OutputTypesUnion,
      CancelMaintenanceWindowExecutionOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = CancelMaintenanceWindowExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelMaintenanceWindowExecutionInput,
    CancelMaintenanceWindowExecutionOutput,
    Blob
  >();

  constructor(readonly input: CancelMaintenanceWindowExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelMaintenanceWindowExecutionInput,
    CancelMaintenanceWindowExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CancelMaintenanceWindowExecutionInput,
        CancelMaintenanceWindowExecutionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
