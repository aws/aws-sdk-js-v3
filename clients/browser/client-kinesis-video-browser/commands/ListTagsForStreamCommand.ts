import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTagsForStream } from "../model/operations/ListTagsForStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForStreamInput } from "../types/ListTagsForStreamInput";
import { ListTagsForStreamOutput } from "../types/ListTagsForStreamOutput";
import { KinesisVideoResolvedConfiguration } from "../KinesisVideoConfiguration";
export * from "../types/ListTagsForStreamInput";
export * from "../types/ListTagsForStreamOutput";
export * from "../types/ListTagsForStreamExceptionsUnion";

export class ListTagsForStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForStreamInput,
      OutputTypesUnion,
      ListTagsForStreamOutput,
      KinesisVideoResolvedConfiguration,
      Blob
    > {
  readonly model = ListTagsForStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForStreamInput,
    ListTagsForStreamOutput,
    Blob
  >();

  constructor(readonly input: ListTagsForStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisVideoResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTagsForStreamInput, ListTagsForStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsForStreamInput, ListTagsForStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
