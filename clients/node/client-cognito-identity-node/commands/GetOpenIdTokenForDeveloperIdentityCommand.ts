import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetOpenIdTokenForDeveloperIdentity } from "../model/GetOpenIdTokenForDeveloperIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOpenIdTokenForDeveloperIdentityInput } from "../types/GetOpenIdTokenForDeveloperIdentityInput";
import { GetOpenIdTokenForDeveloperIdentityOutput } from "../types/GetOpenIdTokenForDeveloperIdentityOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/GetOpenIdTokenForDeveloperIdentityInput";
export * from "../types/GetOpenIdTokenForDeveloperIdentityOutput";
export * from "../types/GetOpenIdTokenForDeveloperIdentityExceptionsUnion";

export class GetOpenIdTokenForDeveloperIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOpenIdTokenForDeveloperIdentityInput,
      OutputTypesUnion,
      GetOpenIdTokenForDeveloperIdentityOutput,
      CognitoIdentityResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetOpenIdTokenForDeveloperIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOpenIdTokenForDeveloperIdentityInput,
    GetOpenIdTokenForDeveloperIdentityOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetOpenIdTokenForDeveloperIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetOpenIdTokenForDeveloperIdentityInput,
    GetOpenIdTokenForDeveloperIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetOpenIdTokenForDeveloperIdentityInput,
        GetOpenIdTokenForDeveloperIdentityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
