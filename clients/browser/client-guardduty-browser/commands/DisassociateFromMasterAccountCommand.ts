import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateFromMasterAccount } from "../model/operations/DisassociateFromMasterAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateFromMasterAccountInput } from "../types/DisassociateFromMasterAccountInput";
import { DisassociateFromMasterAccountOutput } from "../types/DisassociateFromMasterAccountOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/DisassociateFromMasterAccountInput";
export * from "../types/DisassociateFromMasterAccountOutput";
export * from "../types/DisassociateFromMasterAccountExceptionsUnion";

export class DisassociateFromMasterAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateFromMasterAccountInput,
      OutputTypesUnion,
      DisassociateFromMasterAccountOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateFromMasterAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateFromMasterAccountInput,
    DisassociateFromMasterAccountOutput,
    Blob
  >();

  constructor(readonly input: DisassociateFromMasterAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateFromMasterAccountInput,
    DisassociateFromMasterAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateFromMasterAccountInput,
        DisassociateFromMasterAccountOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
