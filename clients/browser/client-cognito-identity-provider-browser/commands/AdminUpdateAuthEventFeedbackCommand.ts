import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminUpdateAuthEventFeedback } from "../model/operations/AdminUpdateAuthEventFeedback";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminUpdateAuthEventFeedbackInput } from "../types/AdminUpdateAuthEventFeedbackInput";
import { AdminUpdateAuthEventFeedbackOutput } from "../types/AdminUpdateAuthEventFeedbackOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminUpdateAuthEventFeedbackInput";
export * from "../types/AdminUpdateAuthEventFeedbackOutput";
export * from "../types/AdminUpdateAuthEventFeedbackExceptionsUnion";

export class AdminUpdateAuthEventFeedbackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminUpdateAuthEventFeedbackInput,
      OutputTypesUnion,
      AdminUpdateAuthEventFeedbackOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminUpdateAuthEventFeedback;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminUpdateAuthEventFeedbackInput,
    AdminUpdateAuthEventFeedbackOutput,
    Blob
  >();

  constructor(readonly input: AdminUpdateAuthEventFeedbackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminUpdateAuthEventFeedbackInput,
    AdminUpdateAuthEventFeedbackOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminUpdateAuthEventFeedbackInput,
        AdminUpdateAuthEventFeedbackOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<
        AdminUpdateAuthEventFeedbackInput,
        AdminUpdateAuthEventFeedbackOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
