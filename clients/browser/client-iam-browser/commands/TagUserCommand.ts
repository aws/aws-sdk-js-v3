import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TagUser } from "../model/operations/TagUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagUserInput } from "../types/TagUserInput";
import { TagUserOutput } from "../types/TagUserOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/TagUserInput";
export * from "../types/TagUserOutput";
export * from "../types/TagUserExceptionsUnion";

export class TagUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagUserInput,
      OutputTypesUnion,
      TagUserOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = TagUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagUserInput,
    TagUserOutput,
    Blob
  >();

  constructor(readonly input: TagUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<TagUserInput, TagUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagUserInput, TagUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
