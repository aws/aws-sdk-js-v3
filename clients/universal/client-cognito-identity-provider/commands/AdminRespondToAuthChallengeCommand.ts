import * as __aws_crypto_sha256_universal from "@aws-crypto/sha256-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminRespondToAuthChallenge } from "../model/AdminRespondToAuthChallenge";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminRespondToAuthChallengeInput } from "../types/AdminRespondToAuthChallengeInput";
import { AdminRespondToAuthChallengeOutput } from "../types/AdminRespondToAuthChallengeOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminRespondToAuthChallengeInput";
export * from "../types/AdminRespondToAuthChallengeOutput";
export * from "../types/AdminRespondToAuthChallengeExceptionsUnion";

export class AdminRespondToAuthChallengeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminRespondToAuthChallengeInput,
      OutputTypesUnion,
      AdminRespondToAuthChallengeOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AdminRespondToAuthChallenge;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminRespondToAuthChallengeInput,
    AdminRespondToAuthChallengeOutput,
    Uint8Array
  >();

  constructor(readonly input: AdminRespondToAuthChallengeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminRespondToAuthChallengeInput,
    AdminRespondToAuthChallengeOutput
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
        AdminRespondToAuthChallengeInput,
        AdminRespondToAuthChallengeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
