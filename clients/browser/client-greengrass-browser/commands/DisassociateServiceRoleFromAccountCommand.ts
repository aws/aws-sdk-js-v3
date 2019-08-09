import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateServiceRoleFromAccount } from "../model/DisassociateServiceRoleFromAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateServiceRoleFromAccountInput } from "../types/DisassociateServiceRoleFromAccountInput";
import { DisassociateServiceRoleFromAccountOutput } from "../types/DisassociateServiceRoleFromAccountOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DisassociateServiceRoleFromAccountInput";
export * from "../types/DisassociateServiceRoleFromAccountOutput";
export * from "../types/DisassociateServiceRoleFromAccountExceptionsUnion";

export class DisassociateServiceRoleFromAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateServiceRoleFromAccountInput,
      OutputTypesUnion,
      DisassociateServiceRoleFromAccountOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateServiceRoleFromAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateServiceRoleFromAccountInput,
    DisassociateServiceRoleFromAccountOutput,
    Blob
  >();

  constructor(readonly input: DisassociateServiceRoleFromAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateServiceRoleFromAccountInput,
    DisassociateServiceRoleFromAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateServiceRoleFromAccountInput,
        DisassociateServiceRoleFromAccountOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
