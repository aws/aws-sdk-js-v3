import * as __aws_crypto_sha256_universal from "@aws-crypto/sha256-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteUserPoolClient } from "../model/DeleteUserPoolClient";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserPoolClientInput } from "../types/DeleteUserPoolClientInput";
import { DeleteUserPoolClientOutput } from "../types/DeleteUserPoolClientOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DeleteUserPoolClientInput";
export * from "../types/DeleteUserPoolClientOutput";
export * from "../types/DeleteUserPoolClientExceptionsUnion";

export class DeleteUserPoolClientCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserPoolClientInput,
      OutputTypesUnion,
      DeleteUserPoolClientOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteUserPoolClient;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserPoolClientInput,
    DeleteUserPoolClientOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteUserPoolClientInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteUserPoolClientInput,
    DeleteUserPoolClientOutput
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
        Uint8Array
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DeleteUserPoolClientInput, DeleteUserPoolClientOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
