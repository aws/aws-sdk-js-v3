import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { Tag } from "../model/Tag";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagInput } from "../types/TagInput";
import { TagOutput } from "../types/TagOutput";
import { ResourceGroupsResolvedConfiguration } from "../ResourceGroupsConfiguration";
export * from "../types/TagInput";
export * from "../types/TagOutput";
export * from "../types/TagExceptionsUnion";

export class TagCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagInput,
      OutputTypesUnion,
      TagOutput,
      ResourceGroupsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = Tag;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagInput,
    TagOutput,
    _stream.Readable
  >();

  constructor(readonly input: TagInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ResourceGroupsResolvedConfiguration
  ): __aws_sdk_types.Handler<TagInput, TagOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagInput, TagOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
