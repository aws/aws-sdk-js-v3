import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveTags } from "../model/RemoveTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveTagsInput } from "../types/RemoveTagsInput";
import { RemoveTagsOutput } from "../types/RemoveTagsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/RemoveTagsInput";
export * from "../types/RemoveTagsOutput";
export * from "../types/RemoveTagsExceptionsUnion";

export class RemoveTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveTagsInput,
      OutputTypesUnion,
      RemoveTagsOutput,
      EMRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RemoveTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveTagsInput,
    RemoveTagsOutput,
    Uint8Array
  >();

  constructor(readonly input: RemoveTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<RemoveTagsInput, RemoveTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveTagsInput, RemoveTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
