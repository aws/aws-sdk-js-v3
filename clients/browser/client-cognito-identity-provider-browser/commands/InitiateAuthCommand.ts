import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InitiateAuth } from "../model/InitiateAuth";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InitiateAuthInput } from "../types/InitiateAuthInput";
import { InitiateAuthOutput } from "../types/InitiateAuthOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/InitiateAuthInput";
export * from "../types/InitiateAuthOutput";
export * from "../types/InitiateAuthExceptionsUnion";

export class InitiateAuthCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InitiateAuthInput,
      OutputTypesUnion,
      InitiateAuthOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = InitiateAuth;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InitiateAuthInput,
    InitiateAuthOutput,
    Blob
  >();

  constructor(readonly input: InitiateAuthInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<InitiateAuthInput, InitiateAuthOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        InputTypesUnion,
        OutputTypesUnion,
        Blob
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<InitiateAuthInput, InitiateAuthOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
