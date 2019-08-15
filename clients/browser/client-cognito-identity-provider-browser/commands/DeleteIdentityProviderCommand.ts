import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteIdentityProvider } from "../model/operations/DeleteIdentityProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIdentityProviderInput } from "../types/DeleteIdentityProviderInput";
import { DeleteIdentityProviderOutput } from "../types/DeleteIdentityProviderOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DeleteIdentityProviderInput";
export * from "../types/DeleteIdentityProviderOutput";
export * from "../types/DeleteIdentityProviderExceptionsUnion";

export class DeleteIdentityProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIdentityProviderInput,
      OutputTypesUnion,
      DeleteIdentityProviderOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteIdentityProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIdentityProviderInput,
    DeleteIdentityProviderOutput,
    Blob
  >();

  constructor(readonly input: DeleteIdentityProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteIdentityProviderInput,
    DeleteIdentityProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DeleteIdentityProviderInput,
        DeleteIdentityProviderOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DeleteIdentityProviderInput, DeleteIdentityProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
