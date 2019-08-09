import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateAccount } from "../model/UpdateAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAccountInput } from "../types/UpdateAccountInput";
import { UpdateAccountOutput } from "../types/UpdateAccountOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateAccountInput";
export * from "../types/UpdateAccountOutput";
export * from "../types/UpdateAccountExceptionsUnion";

export class UpdateAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAccountInput,
      OutputTypesUnion,
      UpdateAccountOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAccountInput,
    UpdateAccountOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAccountInput, UpdateAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAccountInput, UpdateAccountOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
