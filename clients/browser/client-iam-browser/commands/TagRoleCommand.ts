import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TagRole } from "../model/operations/TagRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagRoleInput } from "../types/TagRoleInput";
import { TagRoleOutput } from "../types/TagRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/TagRoleInput";
export * from "../types/TagRoleOutput";
export * from "../types/TagRoleExceptionsUnion";

export class TagRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagRoleInput,
      OutputTypesUnion,
      TagRoleOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = TagRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagRoleInput,
    TagRoleOutput,
    Blob
  >();

  constructor(readonly input: TagRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<TagRoleInput, TagRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagRoleInput, TagRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
