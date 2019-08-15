import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminListDevices } from "../model/operations/AdminListDevices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminListDevicesInput } from "../types/AdminListDevicesInput";
import { AdminListDevicesOutput } from "../types/AdminListDevicesOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminListDevicesInput";
export * from "../types/AdminListDevicesOutput";
export * from "../types/AdminListDevicesExceptionsUnion";

export class AdminListDevicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminListDevicesInput,
      OutputTypesUnion,
      AdminListDevicesOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminListDevices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminListDevicesInput,
    AdminListDevicesOutput,
    Blob
  >();

  constructor(readonly input: AdminListDevicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<AdminListDevicesInput, AdminListDevicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminListDevicesInput,
        AdminListDevicesOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminListDevicesInput, AdminListDevicesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
