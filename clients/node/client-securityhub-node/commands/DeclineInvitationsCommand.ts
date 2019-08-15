import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeclineInvitations } from "../model/operations/DeclineInvitations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeclineInvitationsInput } from "../types/DeclineInvitationsInput";
import { DeclineInvitationsOutput } from "../types/DeclineInvitationsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DeclineInvitationsInput";
export * from "../types/DeclineInvitationsOutput";
export * from "../types/DeclineInvitationsExceptionsUnion";

export class DeclineInvitationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeclineInvitationsInput,
      OutputTypesUnion,
      DeclineInvitationsOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeclineInvitations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeclineInvitationsInput,
    DeclineInvitationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeclineInvitationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeclineInvitationsInput,
    DeclineInvitationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeclineInvitationsInput, DeclineInvitationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
