import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopUserImportJob } from "../model/StopUserImportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopUserImportJobInput } from "../types/StopUserImportJobInput";
import { StopUserImportJobOutput } from "../types/StopUserImportJobOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/StopUserImportJobInput";
export * from "../types/StopUserImportJobOutput";
export * from "../types/StopUserImportJobExceptionsUnion";

export class StopUserImportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopUserImportJobInput,
      OutputTypesUnion,
      StopUserImportJobOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = StopUserImportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopUserImportJobInput,
    StopUserImportJobOutput,
    Blob
  >();

  constructor(readonly input: StopUserImportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<StopUserImportJobInput, StopUserImportJobOutput> {
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
        Blob
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<StopUserImportJobInput, StopUserImportJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
