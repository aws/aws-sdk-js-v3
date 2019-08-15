import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateServiceRoleToAccount } from "../model/operations/AssociateServiceRoleToAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateServiceRoleToAccountInput } from "../types/AssociateServiceRoleToAccountInput";
import { AssociateServiceRoleToAccountOutput } from "../types/AssociateServiceRoleToAccountOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/AssociateServiceRoleToAccountInput";
export * from "../types/AssociateServiceRoleToAccountOutput";
export * from "../types/AssociateServiceRoleToAccountExceptionsUnion";

export class AssociateServiceRoleToAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateServiceRoleToAccountInput,
      OutputTypesUnion,
      AssociateServiceRoleToAccountOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateServiceRoleToAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateServiceRoleToAccountInput,
    AssociateServiceRoleToAccountOutput,
    Blob
  >();

  constructor(readonly input: AssociateServiceRoleToAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateServiceRoleToAccountInput,
    AssociateServiceRoleToAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateServiceRoleToAccountInput,
        AssociateServiceRoleToAccountOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
