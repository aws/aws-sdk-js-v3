import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUserPoolDomain } from "../model/operations/DescribeUserPoolDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserPoolDomainInput } from "../types/DescribeUserPoolDomainInput";
import { DescribeUserPoolDomainOutput } from "../types/DescribeUserPoolDomainOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DescribeUserPoolDomainInput";
export * from "../types/DescribeUserPoolDomainOutput";
export * from "../types/DescribeUserPoolDomainExceptionsUnion";

export class DescribeUserPoolDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserPoolDomainInput,
      OutputTypesUnion,
      DescribeUserPoolDomainOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUserPoolDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserPoolDomainInput,
    DescribeUserPoolDomainOutput,
    Blob
  >();

  constructor(readonly input: DescribeUserPoolDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUserPoolDomainInput,
    DescribeUserPoolDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DescribeUserPoolDomainInput,
        DescribeUserPoolDomainOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DescribeUserPoolDomainInput, DescribeUserPoolDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
