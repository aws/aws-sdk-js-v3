import * as __aws_crypto_sha256_universal from "@aws-crypto/sha256-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUserPool } from "../model/CreateUserPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUserPoolInput } from "../types/CreateUserPoolInput";
import { CreateUserPoolOutput } from "../types/CreateUserPoolOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/CreateUserPoolInput";
export * from "../types/CreateUserPoolOutput";
export * from "../types/CreateUserPoolExceptionsUnion";

export class CreateUserPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUserPoolInput,
      OutputTypesUnion,
      CreateUserPoolOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateUserPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUserPoolInput,
    CreateUserPoolOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateUserPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateUserPoolInput, CreateUserPoolOutput> {
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
      handler<CreateUserPoolInput, CreateUserPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
