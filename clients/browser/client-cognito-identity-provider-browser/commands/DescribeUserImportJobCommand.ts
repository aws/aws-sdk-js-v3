import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUserImportJob } from "../model/operations/DescribeUserImportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserImportJobInput } from "../types/DescribeUserImportJobInput";
import { DescribeUserImportJobOutput } from "../types/DescribeUserImportJobOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DescribeUserImportJobInput";
export * from "../types/DescribeUserImportJobOutput";
export * from "../types/DescribeUserImportJobExceptionsUnion";

export class DescribeUserImportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserImportJobInput,
      OutputTypesUnion,
      DescribeUserImportJobOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUserImportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserImportJobInput,
    DescribeUserImportJobOutput,
    Blob
  >();

  constructor(readonly input: DescribeUserImportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUserImportJobInput,
    DescribeUserImportJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DescribeUserImportJobInput,
        DescribeUserImportJobOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DescribeUserImportJobInput, DescribeUserImportJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
