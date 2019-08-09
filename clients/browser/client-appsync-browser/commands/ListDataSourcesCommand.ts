import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDataSources } from "../model/ListDataSources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDataSourcesInput } from "../types/ListDataSourcesInput";
import { ListDataSourcesOutput } from "../types/ListDataSourcesOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/ListDataSourcesInput";
export * from "../types/ListDataSourcesOutput";
export * from "../types/ListDataSourcesExceptionsUnion";

export class ListDataSourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDataSourcesInput,
      OutputTypesUnion,
      ListDataSourcesOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = ListDataSources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDataSourcesInput,
    ListDataSourcesOutput,
    Blob
  >();

  constructor(readonly input: ListDataSourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDataSourcesInput, ListDataSourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDataSourcesInput, ListDataSourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
