import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMaintenanceWindowExecution } from "../model/GetMaintenanceWindowExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMaintenanceWindowExecutionInput } from "../types/GetMaintenanceWindowExecutionInput";
import { GetMaintenanceWindowExecutionOutput } from "../types/GetMaintenanceWindowExecutionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetMaintenanceWindowExecutionInput";
export * from "../types/GetMaintenanceWindowExecutionOutput";
export * from "../types/GetMaintenanceWindowExecutionExceptionsUnion";

export class GetMaintenanceWindowExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMaintenanceWindowExecutionInput,
      OutputTypesUnion,
      GetMaintenanceWindowExecutionOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = GetMaintenanceWindowExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMaintenanceWindowExecutionInput,
    GetMaintenanceWindowExecutionOutput,
    Blob
  >();

  constructor(readonly input: GetMaintenanceWindowExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMaintenanceWindowExecutionInput,
    GetMaintenanceWindowExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetMaintenanceWindowExecutionInput,
        GetMaintenanceWindowExecutionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
