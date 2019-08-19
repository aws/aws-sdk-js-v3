import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTagsLogGroup } from "../model/operations/ListTagsLogGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsLogGroupInput } from "../types/ListTagsLogGroupInput";
import { ListTagsLogGroupOutput } from "../types/ListTagsLogGroupOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/ListTagsLogGroupInput";
export * from "../types/ListTagsLogGroupOutput";
export * from "../types/ListTagsLogGroupExceptionsUnion";

export class ListTagsLogGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsLogGroupInput,
      OutputTypesUnion,
      ListTagsLogGroupOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = ListTagsLogGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsLogGroupInput,
    ListTagsLogGroupOutput,
    Blob
  >();

  constructor(readonly input: ListTagsLogGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTagsLogGroupInput, ListTagsLogGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsLogGroupInput, ListTagsLogGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
