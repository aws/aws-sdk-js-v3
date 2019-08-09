import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMaintenanceWindowExecutionTaskInvocation } from "../model/GetMaintenanceWindowExecutionTaskInvocation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMaintenanceWindowExecutionTaskInvocationInput } from "../types/GetMaintenanceWindowExecutionTaskInvocationInput";
import { GetMaintenanceWindowExecutionTaskInvocationOutput } from "../types/GetMaintenanceWindowExecutionTaskInvocationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetMaintenanceWindowExecutionTaskInvocationInput";
export * from "../types/GetMaintenanceWindowExecutionTaskInvocationOutput";
export * from "../types/GetMaintenanceWindowExecutionTaskInvocationExceptionsUnion";

export class GetMaintenanceWindowExecutionTaskInvocationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMaintenanceWindowExecutionTaskInvocationInput,
      OutputTypesUnion,
      GetMaintenanceWindowExecutionTaskInvocationOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetMaintenanceWindowExecutionTaskInvocation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMaintenanceWindowExecutionTaskInvocationInput,
    GetMaintenanceWindowExecutionTaskInvocationOutput,
    Uint8Array
  >();

  constructor(
    readonly input: GetMaintenanceWindowExecutionTaskInvocationInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMaintenanceWindowExecutionTaskInvocationInput,
    GetMaintenanceWindowExecutionTaskInvocationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetMaintenanceWindowExecutionTaskInvocationInput,
        GetMaintenanceWindowExecutionTaskInvocationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
