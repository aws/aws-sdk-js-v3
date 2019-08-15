import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDevices } from "../model/operations/ListDevices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDevicesInput } from "../types/ListDevicesInput";
import { ListDevicesOutput } from "../types/ListDevicesOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ListDevicesInput";
export * from "../types/ListDevicesOutput";
export * from "../types/ListDevicesExceptionsUnion";

export class ListDevicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDevicesInput,
      OutputTypesUnion,
      ListDevicesOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ListDevices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDevicesInput,
    ListDevicesOutput,
    Blob
  >();

  constructor(readonly input: ListDevicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDevicesInput, ListDevicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        ListDevicesInput,
        ListDevicesOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<ListDevicesInput, ListDevicesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
