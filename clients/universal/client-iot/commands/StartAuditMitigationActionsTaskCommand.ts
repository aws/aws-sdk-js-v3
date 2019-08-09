import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartAuditMitigationActionsTask } from "../model/StartAuditMitigationActionsTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartAuditMitigationActionsTaskInput } from "../types/StartAuditMitigationActionsTaskInput";
import { StartAuditMitigationActionsTaskOutput } from "../types/StartAuditMitigationActionsTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/StartAuditMitigationActionsTaskInput";
export * from "../types/StartAuditMitigationActionsTaskOutput";
export * from "../types/StartAuditMitigationActionsTaskExceptionsUnion";

export class StartAuditMitigationActionsTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartAuditMitigationActionsTaskInput,
      OutputTypesUnion,
      StartAuditMitigationActionsTaskOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartAuditMitigationActionsTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartAuditMitigationActionsTaskInput,
    StartAuditMitigationActionsTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: StartAuditMitigationActionsTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartAuditMitigationActionsTaskInput,
    StartAuditMitigationActionsTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartAuditMitigationActionsTaskInput,
        StartAuditMitigationActionsTaskOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
