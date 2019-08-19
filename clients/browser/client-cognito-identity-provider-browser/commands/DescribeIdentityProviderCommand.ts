import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIdentityProvider } from "../model/operations/DescribeIdentityProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIdentityProviderInput } from "../types/DescribeIdentityProviderInput";
import { DescribeIdentityProviderOutput } from "../types/DescribeIdentityProviderOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DescribeIdentityProviderInput";
export * from "../types/DescribeIdentityProviderOutput";
export * from "../types/DescribeIdentityProviderExceptionsUnion";

export class DescribeIdentityProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIdentityProviderInput,
      OutputTypesUnion,
      DescribeIdentityProviderOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeIdentityProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIdentityProviderInput,
    DescribeIdentityProviderOutput,
    Blob
  >();

  constructor(readonly input: DescribeIdentityProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeIdentityProviderInput,
    DescribeIdentityProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DescribeIdentityProviderInput,
        DescribeIdentityProviderOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DescribeIdentityProviderInput, DescribeIdentityProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
