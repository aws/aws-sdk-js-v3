import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeResourceServer } from "../model/operations/DescribeResourceServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeResourceServerInput } from "../types/DescribeResourceServerInput";
import { DescribeResourceServerOutput } from "../types/DescribeResourceServerOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DescribeResourceServerInput";
export * from "../types/DescribeResourceServerOutput";
export * from "../types/DescribeResourceServerExceptionsUnion";

export class DescribeResourceServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeResourceServerInput,
      OutputTypesUnion,
      DescribeResourceServerOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeResourceServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeResourceServerInput,
    DescribeResourceServerOutput,
    Blob
  >();

  constructor(readonly input: DescribeResourceServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeResourceServerInput,
    DescribeResourceServerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        DescribeResourceServerInput,
        DescribeResourceServerOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<DescribeResourceServerInput, DescribeResourceServerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
