import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelAuditMitigationActionsTask } from "../model/operations/CancelAuditMitigationActionsTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelAuditMitigationActionsTaskInput } from "../types/CancelAuditMitigationActionsTaskInput";
import { CancelAuditMitigationActionsTaskOutput } from "../types/CancelAuditMitigationActionsTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CancelAuditMitigationActionsTaskInput";
export * from "../types/CancelAuditMitigationActionsTaskOutput";
export * from "../types/CancelAuditMitigationActionsTaskExceptionsUnion";

export class CancelAuditMitigationActionsTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelAuditMitigationActionsTaskInput,
      OutputTypesUnion,
      CancelAuditMitigationActionsTaskOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = CancelAuditMitigationActionsTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelAuditMitigationActionsTaskInput,
    CancelAuditMitigationActionsTaskOutput,
    Blob
  >();

  constructor(readonly input: CancelAuditMitigationActionsTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelAuditMitigationActionsTaskInput,
    CancelAuditMitigationActionsTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CancelAuditMitigationActionsTaskInput,
        CancelAuditMitigationActionsTaskOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
