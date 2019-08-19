import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartUserImportJob } from "../model/operations/StartUserImportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartUserImportJobInput } from "../types/StartUserImportJobInput";
import { StartUserImportJobOutput } from "../types/StartUserImportJobOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/StartUserImportJobInput";
export * from "../types/StartUserImportJobOutput";
export * from "../types/StartUserImportJobExceptionsUnion";

export class StartUserImportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartUserImportJobInput,
      OutputTypesUnion,
      StartUserImportJobOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = StartUserImportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartUserImportJobInput,
    StartUserImportJobOutput,
    Blob
  >();

  constructor(readonly input: StartUserImportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartUserImportJobInput,
    StartUserImportJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        StartUserImportJobInput,
        StartUserImportJobOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<StartUserImportJobInput, StartUserImportJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
