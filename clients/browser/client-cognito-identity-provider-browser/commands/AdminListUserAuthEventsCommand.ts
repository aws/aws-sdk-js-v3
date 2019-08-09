import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminListUserAuthEvents } from "../model/AdminListUserAuthEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminListUserAuthEventsInput } from "../types/AdminListUserAuthEventsInput";
import { AdminListUserAuthEventsOutput } from "../types/AdminListUserAuthEventsOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminListUserAuthEventsInput";
export * from "../types/AdminListUserAuthEventsOutput";
export * from "../types/AdminListUserAuthEventsExceptionsUnion";

export class AdminListUserAuthEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminListUserAuthEventsInput,
      OutputTypesUnion,
      AdminListUserAuthEventsOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminListUserAuthEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminListUserAuthEventsInput,
    AdminListUserAuthEventsOutput,
    Blob
  >();

  constructor(readonly input: AdminListUserAuthEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminListUserAuthEventsInput,
    AdminListUserAuthEventsOutput
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
      handler<AdminListUserAuthEventsInput, AdminListUserAuthEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
