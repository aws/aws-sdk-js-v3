import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEmailIdentity } from "../model/GetEmailIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEmailIdentityInput } from "../types/GetEmailIdentityInput";
import { GetEmailIdentityOutput } from "../types/GetEmailIdentityOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetEmailIdentityInput";
export * from "../types/GetEmailIdentityOutput";
export * from "../types/GetEmailIdentityExceptionsUnion";

export class GetEmailIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEmailIdentityInput,
      OutputTypesUnion,
      GetEmailIdentityOutput,
      PinpointEmailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetEmailIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEmailIdentityInput,
    GetEmailIdentityOutput,
    Uint8Array
  >();

  constructor(readonly input: GetEmailIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetEmailIdentityInput, GetEmailIdentityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEmailIdentityInput, GetEmailIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
