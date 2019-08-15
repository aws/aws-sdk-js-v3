import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteUserPool } from "../model/operations/DeleteUserPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserPoolInput } from "../types/DeleteUserPoolInput";
import { DeleteUserPoolOutput } from "../types/DeleteUserPoolOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DeleteUserPoolInput";
export * from "../types/DeleteUserPoolOutput";
export * from "../types/DeleteUserPoolExceptionsUnion";

export class DeleteUserPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserPoolInput,
      OutputTypesUnion,
      DeleteUserPoolOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteUserPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserPoolInput,
    DeleteUserPoolOutput,
    Blob
  >();

  constructor(readonly input: DeleteUserPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteUserPoolInput, DeleteUserPoolOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DeleteUserPoolInput,
        DeleteUserPoolOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DeleteUserPoolInput, DeleteUserPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
