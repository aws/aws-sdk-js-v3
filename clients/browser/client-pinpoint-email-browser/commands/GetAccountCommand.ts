import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAccount } from "../model/operations/GetAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccountInput } from "../types/GetAccountInput";
import { GetAccountOutput } from "../types/GetAccountOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetAccountInput";
export * from "../types/GetAccountOutput";
export * from "../types/GetAccountExceptionsUnion";

export class GetAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccountInput,
      OutputTypesUnion,
      GetAccountOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = GetAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccountInput,
    GetAccountOutput,
    Blob
  >();

  constructor(readonly input: GetAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAccountInput, GetAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccountInput, GetAccountOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
