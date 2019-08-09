import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAuditMitigationActionsTask } from "../model/DescribeAuditMitigationActionsTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAuditMitigationActionsTaskInput } from "../types/DescribeAuditMitigationActionsTaskInput";
import { DescribeAuditMitigationActionsTaskOutput } from "../types/DescribeAuditMitigationActionsTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeAuditMitigationActionsTaskInput";
export * from "../types/DescribeAuditMitigationActionsTaskOutput";
export * from "../types/DescribeAuditMitigationActionsTaskExceptionsUnion";

export class DescribeAuditMitigationActionsTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAuditMitigationActionsTaskInput,
      OutputTypesUnion,
      DescribeAuditMitigationActionsTaskOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeAuditMitigationActionsTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAuditMitigationActionsTaskInput,
    DescribeAuditMitigationActionsTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAuditMitigationActionsTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAuditMitigationActionsTaskInput,
    DescribeAuditMitigationActionsTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAuditMitigationActionsTaskInput,
        DescribeAuditMitigationActionsTaskOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
