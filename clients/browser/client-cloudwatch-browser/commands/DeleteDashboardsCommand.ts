import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDashboards } from "../model/DeleteDashboards";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDashboardsInput } from "../types/DeleteDashboardsInput";
import { DeleteDashboardsOutput } from "../types/DeleteDashboardsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/DeleteDashboardsInput";
export * from "../types/DeleteDashboardsOutput";
export * from "../types/DeleteDashboardsExceptionsUnion";

export class DeleteDashboardsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDashboardsInput,
      OutputTypesUnion,
      DeleteDashboardsOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDashboards;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDashboardsInput,
    DeleteDashboardsOutput,
    Blob
  >();

  constructor(readonly input: DeleteDashboardsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDashboardsInput, DeleteDashboardsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDashboardsInput, DeleteDashboardsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
