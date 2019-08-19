import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAuditTasks } from "../model/operations/ListAuditTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAuditTasksInput } from "../types/ListAuditTasksInput";
import { ListAuditTasksOutput } from "../types/ListAuditTasksOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListAuditTasksInput";
export * from "../types/ListAuditTasksOutput";
export * from "../types/ListAuditTasksExceptionsUnion";

export class ListAuditTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAuditTasksInput,
      OutputTypesUnion,
      ListAuditTasksOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListAuditTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAuditTasksInput,
    ListAuditTasksOutput,
    Blob
  >();

  constructor(readonly input: ListAuditTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAuditTasksInput, ListAuditTasksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAuditTasksInput, ListAuditTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
