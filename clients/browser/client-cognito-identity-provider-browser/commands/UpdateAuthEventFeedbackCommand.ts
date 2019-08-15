import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateAuthEventFeedback } from "../model/operations/UpdateAuthEventFeedback";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAuthEventFeedbackInput } from "../types/UpdateAuthEventFeedbackInput";
import { UpdateAuthEventFeedbackOutput } from "../types/UpdateAuthEventFeedbackOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/UpdateAuthEventFeedbackInput";
export * from "../types/UpdateAuthEventFeedbackOutput";
export * from "../types/UpdateAuthEventFeedbackExceptionsUnion";

export class UpdateAuthEventFeedbackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAuthEventFeedbackInput,
      OutputTypesUnion,
      UpdateAuthEventFeedbackOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateAuthEventFeedback;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAuthEventFeedbackInput,
    UpdateAuthEventFeedbackOutput,
    Blob
  >();

  constructor(readonly input: UpdateAuthEventFeedbackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAuthEventFeedbackInput,
    UpdateAuthEventFeedbackOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        UpdateAuthEventFeedbackInput,
        UpdateAuthEventFeedbackOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<UpdateAuthEventFeedbackInput, UpdateAuthEventFeedbackOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
