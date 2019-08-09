import * as __aws_crypto_sha256_universal from "@aws-crypto/sha256-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminDeleteUserAttributes } from "../model/AdminDeleteUserAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminDeleteUserAttributesInput } from "../types/AdminDeleteUserAttributesInput";
import { AdminDeleteUserAttributesOutput } from "../types/AdminDeleteUserAttributesOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminDeleteUserAttributesInput";
export * from "../types/AdminDeleteUserAttributesOutput";
export * from "../types/AdminDeleteUserAttributesExceptionsUnion";

export class AdminDeleteUserAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminDeleteUserAttributesInput,
      OutputTypesUnion,
      AdminDeleteUserAttributesOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AdminDeleteUserAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminDeleteUserAttributesInput,
    AdminDeleteUserAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: AdminDeleteUserAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminDeleteUserAttributesInput,
    AdminDeleteUserAttributesOutput
  > {
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
        Uint8Array
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminDeleteUserAttributesInput, AdminDeleteUserAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
