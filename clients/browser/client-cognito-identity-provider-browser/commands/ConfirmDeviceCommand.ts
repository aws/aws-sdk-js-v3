import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConfirmDevice } from "../model/operations/ConfirmDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmDeviceInput } from "../types/ConfirmDeviceInput";
import { ConfirmDeviceOutput } from "../types/ConfirmDeviceOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ConfirmDeviceInput";
export * from "../types/ConfirmDeviceOutput";
export * from "../types/ConfirmDeviceExceptionsUnion";

export class ConfirmDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmDeviceInput,
      OutputTypesUnion,
      ConfirmDeviceOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ConfirmDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmDeviceInput,
    ConfirmDeviceOutput,
    Blob
  >();

  constructor(readonly input: ConfirmDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<ConfirmDeviceInput, ConfirmDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        ConfirmDeviceInput,
        ConfirmDeviceOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<ConfirmDeviceInput, ConfirmDeviceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
