import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRoleTags } from "../model/operations/ListRoleTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRoleTagsInput } from "../types/ListRoleTagsInput";
import { ListRoleTagsOutput } from "../types/ListRoleTagsOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListRoleTagsInput";
export * from "../types/ListRoleTagsOutput";
export * from "../types/ListRoleTagsExceptionsUnion";

export class ListRoleTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRoleTagsInput,
      OutputTypesUnion,
      ListRoleTagsOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRoleTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRoleTagsInput,
    ListRoleTagsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRoleTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRoleTagsInput, ListRoleTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRoleTagsInput, ListRoleTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
