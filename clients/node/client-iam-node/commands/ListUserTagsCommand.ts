import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListUserTags } from "../model/ListUserTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUserTagsInput } from "../types/ListUserTagsInput";
import { ListUserTagsOutput } from "../types/ListUserTagsOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListUserTagsInput";
export * from "../types/ListUserTagsOutput";
export * from "../types/ListUserTagsExceptionsUnion";

export class ListUserTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUserTagsInput,
      OutputTypesUnion,
      ListUserTagsOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListUserTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUserTagsInput,
    ListUserTagsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListUserTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUserTagsInput, ListUserTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUserTagsInput, ListUserTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
