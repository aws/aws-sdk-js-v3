import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateResourceServer } from "../model/operations/CreateResourceServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResourceServerInput } from "../types/CreateResourceServerInput";
import { CreateResourceServerOutput } from "../types/CreateResourceServerOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/CreateResourceServerInput";
export * from "../types/CreateResourceServerOutput";
export * from "../types/CreateResourceServerExceptionsUnion";

export class CreateResourceServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResourceServerInput,
      OutputTypesUnion,
      CreateResourceServerOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = CreateResourceServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResourceServerInput,
    CreateResourceServerOutput,
    Blob
  >();

  constructor(readonly input: CreateResourceServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateResourceServerInput,
    CreateResourceServerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        CreateResourceServerInput,
        CreateResourceServerOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<CreateResourceServerInput, CreateResourceServerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
