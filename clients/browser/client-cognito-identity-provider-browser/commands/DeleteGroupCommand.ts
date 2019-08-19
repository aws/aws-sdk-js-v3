import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteGroup } from "../model/operations/DeleteGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGroupInput } from "../types/DeleteGroupInput";
import { DeleteGroupOutput } from "../types/DeleteGroupOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DeleteGroupInput";
export * from "../types/DeleteGroupOutput";
export * from "../types/DeleteGroupExceptionsUnion";

export class DeleteGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGroupInput,
      OutputTypesUnion,
      DeleteGroupOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGroupInput,
    DeleteGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteGroupInput, DeleteGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DeleteGroupInput,
        DeleteGroupOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DeleteGroupInput, DeleteGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
