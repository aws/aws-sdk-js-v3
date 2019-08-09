import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMaintenanceWindowExecutionTaskInvocations } from "../model/DescribeMaintenanceWindowExecutionTaskInvocations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowExecutionTaskInvocationsInput } from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsInput";
import { DescribeMaintenanceWindowExecutionTaskInvocationsOutput } from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsInput";
export * from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsOutput";
export * from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsExceptionsUnion";

export class DescribeMaintenanceWindowExecutionTaskInvocationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowExecutionTaskInvocationsInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowExecutionTaskInvocationsOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeMaintenanceWindowExecutionTaskInvocations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowExecutionTaskInvocationsInput,
    DescribeMaintenanceWindowExecutionTaskInvocationsOutput,
    Uint8Array
  >();

  constructor(
    readonly input: DescribeMaintenanceWindowExecutionTaskInvocationsInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowExecutionTaskInvocationsInput,
    DescribeMaintenanceWindowExecutionTaskInvocationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowExecutionTaskInvocationsInput,
        DescribeMaintenanceWindowExecutionTaskInvocationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
