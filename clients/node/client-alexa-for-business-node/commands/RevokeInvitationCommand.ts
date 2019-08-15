import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RevokeInvitation } from "../model/operations/RevokeInvitation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeInvitationInput } from "../types/RevokeInvitationInput";
import { RevokeInvitationOutput } from "../types/RevokeInvitationOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/RevokeInvitationInput";
export * from "../types/RevokeInvitationOutput";
export * from "../types/RevokeInvitationExceptionsUnion";

export class RevokeInvitationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeInvitationInput,
      OutputTypesUnion,
      RevokeInvitationOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RevokeInvitation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeInvitationInput,
    RevokeInvitationOutput,
    _stream.Readable
  >();

  constructor(readonly input: RevokeInvitationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<RevokeInvitationInput, RevokeInvitationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeInvitationInput, RevokeInvitationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
