import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListGroups } from "../model/operations/ListGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupsInput } from "../types/ListGroupsInput";
import { ListGroupsOutput } from "../types/ListGroupsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListGroupsInput";
export * from "../types/ListGroupsOutput";
export * from "../types/ListGroupsExceptionsUnion";

export class ListGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupsInput,
      OutputTypesUnion,
      ListGroupsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupsInput,
    ListGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGroupsInput, ListGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroupsInput, ListGroupsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
