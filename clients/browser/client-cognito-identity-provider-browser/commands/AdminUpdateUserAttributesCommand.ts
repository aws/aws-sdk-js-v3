import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminUpdateUserAttributes } from "../model/operations/AdminUpdateUserAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminUpdateUserAttributesInput } from "../types/AdminUpdateUserAttributesInput";
import { AdminUpdateUserAttributesOutput } from "../types/AdminUpdateUserAttributesOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminUpdateUserAttributesInput";
export * from "../types/AdminUpdateUserAttributesOutput";
export * from "../types/AdminUpdateUserAttributesExceptionsUnion";

export class AdminUpdateUserAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminUpdateUserAttributesInput,
      OutputTypesUnion,
      AdminUpdateUserAttributesOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminUpdateUserAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminUpdateUserAttributesInput,
    AdminUpdateUserAttributesOutput,
    Blob
  >();

  constructor(readonly input: AdminUpdateUserAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminUpdateUserAttributesInput,
    AdminUpdateUserAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminUpdateUserAttributesInput,
        AdminUpdateUserAttributesOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminUpdateUserAttributesInput, AdminUpdateUserAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
