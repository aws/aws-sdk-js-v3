import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTags } from "../model/operations/ListTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsInput } from "../types/ListTagsInput";
import { ListTagsOutput } from "../types/ListTagsOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
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
      ACMPCAResolvedConfiguration,
      Blob
    > {
  readonly model = ListTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsInput,
    ListTagsOutput,
    Blob
  >();

  constructor(readonly input: ListTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMPCAResolvedConfiguration
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
