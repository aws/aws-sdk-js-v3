import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ForgetDevice } from "../model/ForgetDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ForgetDeviceInput } from "../types/ForgetDeviceInput";
import { ForgetDeviceOutput } from "../types/ForgetDeviceOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ForgetDeviceInput";
export * from "../types/ForgetDeviceOutput";
export * from "../types/ForgetDeviceExceptionsUnion";

export class ForgetDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ForgetDeviceInput,
      OutputTypesUnion,
      ForgetDeviceOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ForgetDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ForgetDeviceInput,
    ForgetDeviceOutput,
    Blob
  >();

  constructor(readonly input: ForgetDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<ForgetDeviceInput, ForgetDeviceOutput> {
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
      handler<ForgetDeviceInput, ForgetDeviceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
