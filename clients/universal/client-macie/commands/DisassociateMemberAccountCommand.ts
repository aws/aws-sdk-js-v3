import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateMemberAccount } from "../model/DisassociateMemberAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateMemberAccountInput } from "../types/DisassociateMemberAccountInput";
import { DisassociateMemberAccountOutput } from "../types/DisassociateMemberAccountOutput";
import { MacieResolvedConfiguration } from "../MacieConfiguration";
export * from "../types/DisassociateMemberAccountInput";
export * from "../types/DisassociateMemberAccountOutput";
export * from "../types/DisassociateMemberAccountExceptionsUnion";

export class DisassociateMemberAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateMemberAccountInput,
      OutputTypesUnion,
      DisassociateMemberAccountOutput,
      MacieResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisassociateMemberAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateMemberAccountInput,
    DisassociateMemberAccountOutput,
    Uint8Array
  >();

  constructor(readonly input: DisassociateMemberAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MacieResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateMemberAccountInput,
    DisassociateMemberAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateMemberAccountInput, DisassociateMemberAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
