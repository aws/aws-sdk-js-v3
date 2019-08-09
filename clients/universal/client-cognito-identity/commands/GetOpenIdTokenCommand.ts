import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetOpenIdToken } from "../model/GetOpenIdToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOpenIdTokenInput } from "../types/GetOpenIdTokenInput";
import { GetOpenIdTokenOutput } from "../types/GetOpenIdTokenOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/GetOpenIdTokenInput";
export * from "../types/GetOpenIdTokenOutput";
export * from "../types/GetOpenIdTokenExceptionsUnion";

export class GetOpenIdTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOpenIdTokenInput,
      OutputTypesUnion,
      GetOpenIdTokenOutput,
      CognitoIdentityResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetOpenIdToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOpenIdTokenInput,
    GetOpenIdTokenOutput,
    Uint8Array
  >();

  constructor(readonly input: GetOpenIdTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<GetOpenIdTokenInput, GetOpenIdTokenOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOpenIdTokenInput, GetOpenIdTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
