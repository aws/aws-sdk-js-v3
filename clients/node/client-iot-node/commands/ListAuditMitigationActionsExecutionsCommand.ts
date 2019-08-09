import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAuditMitigationActionsExecutions } from "../model/ListAuditMitigationActionsExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAuditMitigationActionsExecutionsInput } from "../types/ListAuditMitigationActionsExecutionsInput";
import { ListAuditMitigationActionsExecutionsOutput } from "../types/ListAuditMitigationActionsExecutionsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListAuditMitigationActionsExecutionsInput";
export * from "../types/ListAuditMitigationActionsExecutionsOutput";
export * from "../types/ListAuditMitigationActionsExecutionsExceptionsUnion";

export class ListAuditMitigationActionsExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAuditMitigationActionsExecutionsInput,
      OutputTypesUnion,
      ListAuditMitigationActionsExecutionsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAuditMitigationActionsExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAuditMitigationActionsExecutionsInput,
    ListAuditMitigationActionsExecutionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAuditMitigationActionsExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAuditMitigationActionsExecutionsInput,
    ListAuditMitigationActionsExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAuditMitigationActionsExecutionsInput,
        ListAuditMitigationActionsExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
