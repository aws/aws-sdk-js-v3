import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDashboards } from "../model/operations/ListDashboards";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDashboardsInput } from "../types/ListDashboardsInput";
import { ListDashboardsOutput } from "../types/ListDashboardsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/ListDashboardsInput";
export * from "../types/ListDashboardsOutput";
export * from "../types/ListDashboardsExceptionsUnion";

export class ListDashboardsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDashboardsInput,
      OutputTypesUnion,
      ListDashboardsOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = ListDashboards;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDashboardsInput,
    ListDashboardsOutput,
    Blob
  >();

  constructor(readonly input: ListDashboardsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDashboardsInput, ListDashboardsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDashboardsInput, ListDashboardsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
