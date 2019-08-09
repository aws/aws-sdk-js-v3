import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTagsForResource } from "../model/ListTagsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForResourceInput } from "../types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../types/ListTagsForResourceOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/ListTagsForResourceInput";
export * from "../types/ListTagsForResourceOutput";
export * from "../types/ListTagsForResourceExceptionsUnion";

export class ListTagsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForResourceInput,
      OutputTypesUnion,
      ListTagsForResourceOutput,
      MediaConvertResolvedConfiguration,
      Blob
    > {
  readonly model = ListTagsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForResourceInput,
    ListTagsForResourceOutput,
    Blob
  >();

  constructor(readonly input: ListTagsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTagsForResourceInput,
    ListTagsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsForResourceInput, ListTagsForResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
