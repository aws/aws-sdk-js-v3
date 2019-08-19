import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminUpdateDeviceStatus } from "../model/operations/AdminUpdateDeviceStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminUpdateDeviceStatusInput } from "../types/AdminUpdateDeviceStatusInput";
import { AdminUpdateDeviceStatusOutput } from "../types/AdminUpdateDeviceStatusOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminUpdateDeviceStatusInput";
export * from "../types/AdminUpdateDeviceStatusOutput";
export * from "../types/AdminUpdateDeviceStatusExceptionsUnion";

export class AdminUpdateDeviceStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminUpdateDeviceStatusInput,
      OutputTypesUnion,
      AdminUpdateDeviceStatusOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminUpdateDeviceStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminUpdateDeviceStatusInput,
    AdminUpdateDeviceStatusOutput,
    Blob
  >();

  constructor(readonly input: AdminUpdateDeviceStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminUpdateDeviceStatusInput,
    AdminUpdateDeviceStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminUpdateDeviceStatusInput,
        AdminUpdateDeviceStatusOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminUpdateDeviceStatusInput, AdminUpdateDeviceStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
