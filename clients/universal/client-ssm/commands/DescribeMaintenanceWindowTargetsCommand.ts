import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMaintenanceWindowTargets } from "../model/DescribeMaintenanceWindowTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowTargetsInput } from "../types/DescribeMaintenanceWindowTargetsInput";
import { DescribeMaintenanceWindowTargetsOutput } from "../types/DescribeMaintenanceWindowTargetsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowTargetsInput";
export * from "../types/DescribeMaintenanceWindowTargetsOutput";
export * from "../types/DescribeMaintenanceWindowTargetsExceptionsUnion";

export class DescribeMaintenanceWindowTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowTargetsInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowTargetsOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeMaintenanceWindowTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowTargetsInput,
    DescribeMaintenanceWindowTargetsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeMaintenanceWindowTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowTargetsInput,
    DescribeMaintenanceWindowTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowTargetsInput,
        DescribeMaintenanceWindowTargetsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
