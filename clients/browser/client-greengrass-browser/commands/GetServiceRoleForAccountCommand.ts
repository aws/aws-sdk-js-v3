import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetServiceRoleForAccount } from "../model/operations/GetServiceRoleForAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceRoleForAccountInput } from "../types/GetServiceRoleForAccountInput";
import { GetServiceRoleForAccountOutput } from "../types/GetServiceRoleForAccountOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetServiceRoleForAccountInput";
export * from "../types/GetServiceRoleForAccountOutput";
export * from "../types/GetServiceRoleForAccountExceptionsUnion";

export class GetServiceRoleForAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceRoleForAccountInput,
      OutputTypesUnion,
      GetServiceRoleForAccountOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = GetServiceRoleForAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceRoleForAccountInput,
    GetServiceRoleForAccountOutput,
    Blob
  >();

  constructor(readonly input: GetServiceRoleForAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetServiceRoleForAccountInput,
    GetServiceRoleForAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetServiceRoleForAccountInput, GetServiceRoleForAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
