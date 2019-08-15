import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateMembers } from "../model/operations/DisassociateMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateMembersInput } from "../types/DisassociateMembersInput";
import { DisassociateMembersOutput } from "../types/DisassociateMembersOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DisassociateMembersInput";
export * from "../types/DisassociateMembersOutput";
export * from "../types/DisassociateMembersExceptionsUnion";

export class DisassociateMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateMembersInput,
      OutputTypesUnion,
      DisassociateMembersOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateMembersInput,
    DisassociateMembersOutput,
    Blob
  >();

  constructor(readonly input: DisassociateMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateMembersInput,
    DisassociateMembersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateMembersInput, DisassociateMembersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
