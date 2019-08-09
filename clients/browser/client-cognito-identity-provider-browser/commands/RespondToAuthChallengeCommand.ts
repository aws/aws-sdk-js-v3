import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RespondToAuthChallenge } from "../model/RespondToAuthChallenge";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RespondToAuthChallengeInput } from "../types/RespondToAuthChallengeInput";
import { RespondToAuthChallengeOutput } from "../types/RespondToAuthChallengeOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/RespondToAuthChallengeInput";
export * from "../types/RespondToAuthChallengeOutput";
export * from "../types/RespondToAuthChallengeExceptionsUnion";

export class RespondToAuthChallengeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RespondToAuthChallengeInput,
      OutputTypesUnion,
      RespondToAuthChallengeOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = RespondToAuthChallenge;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RespondToAuthChallengeInput,
    RespondToAuthChallengeOutput,
    Blob
  >();

  constructor(readonly input: RespondToAuthChallengeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RespondToAuthChallengeInput,
    RespondToAuthChallengeOutput
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
        Blob
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<RespondToAuthChallengeInput, RespondToAuthChallengeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
