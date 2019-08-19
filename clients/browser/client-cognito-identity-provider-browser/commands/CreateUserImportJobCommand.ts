import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUserImportJob } from "../model/operations/CreateUserImportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUserImportJobInput } from "../types/CreateUserImportJobInput";
import { CreateUserImportJobOutput } from "../types/CreateUserImportJobOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/CreateUserImportJobInput";
export * from "../types/CreateUserImportJobOutput";
export * from "../types/CreateUserImportJobExceptionsUnion";

export class CreateUserImportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUserImportJobInput,
      OutputTypesUnion,
      CreateUserImportJobOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = CreateUserImportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUserImportJobInput,
    CreateUserImportJobOutput,
    Blob
  >();

  constructor(readonly input: CreateUserImportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateUserImportJobInput,
    CreateUserImportJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        CreateUserImportJobInput,
        CreateUserImportJobOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<CreateUserImportJobInput, CreateUserImportJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
