import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDeviceStatus } from "../model/UpdateDeviceStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDeviceStatusInput } from "../types/UpdateDeviceStatusInput";
import { UpdateDeviceStatusOutput } from "../types/UpdateDeviceStatusOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/UpdateDeviceStatusInput";
export * from "../types/UpdateDeviceStatusOutput";
export * from "../types/UpdateDeviceStatusExceptionsUnion";

export class UpdateDeviceStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDeviceStatusInput,
      OutputTypesUnion,
      UpdateDeviceStatusOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDeviceStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDeviceStatusInput,
    UpdateDeviceStatusOutput,
    Blob
  >();

  constructor(readonly input: UpdateDeviceStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDeviceStatusInput,
    UpdateDeviceStatusOutput
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
      handler<UpdateDeviceStatusInput, UpdateDeviceStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
