import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListQueueTags } from "../model/ListQueueTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListQueueTagsInput } from "../types/ListQueueTagsInput";
import { ListQueueTagsOutput } from "../types/ListQueueTagsOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/ListQueueTagsInput";
export * from "../types/ListQueueTagsOutput";
export * from "../types/ListQueueTagsExceptionsUnion";

export class ListQueueTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListQueueTagsInput,
      OutputTypesUnion,
      ListQueueTagsOutput,
      SQSResolvedConfiguration,
      Blob
    > {
  readonly model = ListQueueTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListQueueTagsInput,
    ListQueueTagsOutput,
    Blob
  >();

  constructor(readonly input: ListQueueTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListQueueTagsInput, ListQueueTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListQueueTagsInput, ListQueueTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
