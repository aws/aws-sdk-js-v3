import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartAuditMitigationActionsTask } from "../model/operations/StartAuditMitigationActionsTask";
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
      _stream.Readable
    > {
  readonly model = StartAuditMitigationActionsTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartAuditMitigationActionsTaskInput,
    StartAuditMitigationActionsTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartAuditMitigationActionsTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
