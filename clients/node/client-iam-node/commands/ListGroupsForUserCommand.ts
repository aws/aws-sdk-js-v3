import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListGroupsForUser } from "../model/operations/ListGroupsForUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupsForUserInput } from "../types/ListGroupsForUserInput";
import { ListGroupsForUserOutput } from "../types/ListGroupsForUserOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListGroupsForUserInput";
export * from "../types/ListGroupsForUserOutput";
export * from "../types/ListGroupsForUserExceptionsUnion";

export class ListGroupsForUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupsForUserInput,
      OutputTypesUnion,
      ListGroupsForUserOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListGroupsForUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupsForUserInput,
    ListGroupsForUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListGroupsForUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGroupsForUserInput, ListGroupsForUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroupsForUserInput, ListGroupsForUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
