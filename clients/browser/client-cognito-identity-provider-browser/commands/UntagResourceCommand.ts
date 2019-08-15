import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagResource } from "../model/operations/UntagResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagResourceInput } from "../types/UntagResourceInput";
import { UntagResourceOutput } from "../types/UntagResourceOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/UntagResourceInput";
export * from "../types/UntagResourceOutput";
export * from "../types/UntagResourceExceptionsUnion";

export class UntagResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagResourceInput,
      OutputTypesUnion,
      UntagResourceOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = UntagResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagResourceInput,
    UntagResourceOutput,
    Blob
  >();

  constructor(readonly input: UntagResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagResourceInput, UntagResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        UntagResourceInput,
        UntagResourceOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<UntagResourceInput, UntagResourceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
