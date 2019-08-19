import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { InviteUsers } from "../model/operations/InviteUsers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InviteUsersInput } from "../types/InviteUsersInput";
import { InviteUsersOutput } from "../types/InviteUsersOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/InviteUsersInput";
export * from "../types/InviteUsersOutput";
export * from "../types/InviteUsersExceptionsUnion";

export class InviteUsersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InviteUsersInput,
      OutputTypesUnion,
      InviteUsersOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = InviteUsers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InviteUsersInput,
    InviteUsersOutput,
    _stream.Readable
  >();

  constructor(readonly input: InviteUsersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<InviteUsersInput, InviteUsersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InviteUsersInput, InviteUsersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
