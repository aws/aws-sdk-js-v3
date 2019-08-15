import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminInitiateAuth } from "../model/operations/AdminInitiateAuth";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminInitiateAuthInput } from "../types/AdminInitiateAuthInput";
import { AdminInitiateAuthOutput } from "../types/AdminInitiateAuthOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminInitiateAuthInput";
export * from "../types/AdminInitiateAuthOutput";
export * from "../types/AdminInitiateAuthExceptionsUnion";

export class AdminInitiateAuthCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminInitiateAuthInput,
      OutputTypesUnion,
      AdminInitiateAuthOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminInitiateAuth;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminInitiateAuthInput,
    AdminInitiateAuthOutput,
    Blob
  >();

  constructor(readonly input: AdminInitiateAuthInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<AdminInitiateAuthInput, AdminInitiateAuthOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminInitiateAuthInput,
        AdminInitiateAuthOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminInitiateAuthInput, AdminInitiateAuthOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
