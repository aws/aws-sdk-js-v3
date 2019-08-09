import * as __aws_crypto_sha256_universal from "@aws-crypto/sha256-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminDisableProviderForUser } from "../model/AdminDisableProviderForUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminDisableProviderForUserInput } from "../types/AdminDisableProviderForUserInput";
import { AdminDisableProviderForUserOutput } from "../types/AdminDisableProviderForUserOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminDisableProviderForUserInput";
export * from "../types/AdminDisableProviderForUserOutput";
export * from "../types/AdminDisableProviderForUserExceptionsUnion";

export class AdminDisableProviderForUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminDisableProviderForUserInput,
      OutputTypesUnion,
      AdminDisableProviderForUserOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AdminDisableProviderForUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminDisableProviderForUserInput,
    AdminDisableProviderForUserOutput,
    Uint8Array
  >();

  constructor(readonly input: AdminDisableProviderForUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminDisableProviderForUserInput,
    AdminDisableProviderForUserOutput
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
      handler<
        AdminDisableProviderForUserInput,
        AdminDisableProviderForUserOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
