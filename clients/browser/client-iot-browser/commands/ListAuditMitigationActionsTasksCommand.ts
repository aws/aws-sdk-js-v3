import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAuditMitigationActionsTasks } from "../model/ListAuditMitigationActionsTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAuditMitigationActionsTasksInput } from "../types/ListAuditMitigationActionsTasksInput";
import { ListAuditMitigationActionsTasksOutput } from "../types/ListAuditMitigationActionsTasksOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListAuditMitigationActionsTasksInput";
export * from "../types/ListAuditMitigationActionsTasksOutput";
export * from "../types/ListAuditMitigationActionsTasksExceptionsUnion";

export class ListAuditMitigationActionsTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAuditMitigationActionsTasksInput,
      OutputTypesUnion,
      ListAuditMitigationActionsTasksOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListAuditMitigationActionsTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAuditMitigationActionsTasksInput,
    ListAuditMitigationActionsTasksOutput,
    Blob
  >();

  constructor(readonly input: ListAuditMitigationActionsTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAuditMitigationActionsTasksInput,
    ListAuditMitigationActionsTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAuditMitigationActionsTasksInput,
        ListAuditMitigationActionsTasksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
