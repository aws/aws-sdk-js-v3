import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTags } from "../model/ListTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsInput } from "../types/ListTagsInput";
import { ListTagsOutput } from "../types/ListTagsOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ListTagsInput";
export * from "../types/ListTagsOutput";
export * from "../types/ListTagsExceptionsUnion";

export class ListTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsInput,
      OutputTypesUnion,
      ListTagsOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsInput,
    ListTagsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTagsInput, ListTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsInput, ListTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
