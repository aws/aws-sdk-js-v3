import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResourceShareInvitations } from "../model/operations/GetResourceShareInvitations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceShareInvitationsInput } from "../types/GetResourceShareInvitationsInput";
import { GetResourceShareInvitationsOutput } from "../types/GetResourceShareInvitationsOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/GetResourceShareInvitationsInput";
export * from "../types/GetResourceShareInvitationsOutput";
export * from "../types/GetResourceShareInvitationsExceptionsUnion";

export class GetResourceShareInvitationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceShareInvitationsInput,
      OutputTypesUnion,
      GetResourceShareInvitationsOutput,
      RAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetResourceShareInvitations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceShareInvitationsInput,
    GetResourceShareInvitationsOutput,
    Blob
  >();

  constructor(readonly input: GetResourceShareInvitationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResourceShareInvitationsInput,
    GetResourceShareInvitationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetResourceShareInvitationsInput,
        GetResourceShareInvitationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
