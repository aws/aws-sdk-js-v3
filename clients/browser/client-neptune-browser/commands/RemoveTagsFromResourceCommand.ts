import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveTagsFromResource } from "../model/operations/RemoveTagsFromResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveTagsFromResourceInput } from "../types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "../types/RemoveTagsFromResourceOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/RemoveTagsFromResourceInput";
export * from "../types/RemoveTagsFromResourceOutput";
export * from "../types/RemoveTagsFromResourceExceptionsUnion";

export class RemoveTagsFromResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveTagsFromResourceInput,
      OutputTypesUnion,
      RemoveTagsFromResourceOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = RemoveTagsFromResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveTagsFromResourceInput,
    RemoveTagsFromResourceOutput,
    Blob
  >();

  constructor(readonly input: RemoveTagsFromResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveTagsFromResourceInput,
    RemoveTagsFromResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveTagsFromResourceInput, RemoveTagsFromResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
