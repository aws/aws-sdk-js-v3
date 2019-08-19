import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminLinkProviderForUser } from "../model/operations/AdminLinkProviderForUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminLinkProviderForUserInput } from "../types/AdminLinkProviderForUserInput";
import { AdminLinkProviderForUserOutput } from "../types/AdminLinkProviderForUserOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminLinkProviderForUserInput";
export * from "../types/AdminLinkProviderForUserOutput";
export * from "../types/AdminLinkProviderForUserExceptionsUnion";

export class AdminLinkProviderForUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminLinkProviderForUserInput,
      OutputTypesUnion,
      AdminLinkProviderForUserOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminLinkProviderForUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminLinkProviderForUserInput,
    AdminLinkProviderForUserOutput,
    Blob
  >();

  constructor(readonly input: AdminLinkProviderForUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminLinkProviderForUserInput,
    AdminLinkProviderForUserOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminLinkProviderForUserInput,
        AdminLinkProviderForUserOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminLinkProviderForUserInput, AdminLinkProviderForUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
