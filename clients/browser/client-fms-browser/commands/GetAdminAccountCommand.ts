import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAdminAccount } from "../model/operations/GetAdminAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAdminAccountInput } from "../types/GetAdminAccountInput";
import { GetAdminAccountOutput } from "../types/GetAdminAccountOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/GetAdminAccountInput";
export * from "../types/GetAdminAccountOutput";
export * from "../types/GetAdminAccountExceptionsUnion";

export class GetAdminAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAdminAccountInput,
      OutputTypesUnion,
      GetAdminAccountOutput,
      FMSResolvedConfiguration,
      Blob
    > {
  readonly model = GetAdminAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAdminAccountInput,
    GetAdminAccountOutput,
    Blob
  >();

  constructor(readonly input: GetAdminAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAdminAccountInput, GetAdminAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAdminAccountInput, GetAdminAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
