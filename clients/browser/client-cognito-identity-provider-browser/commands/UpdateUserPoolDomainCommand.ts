import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUserPoolDomain } from "../model/operations/UpdateUserPoolDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserPoolDomainInput } from "../types/UpdateUserPoolDomainInput";
import { UpdateUserPoolDomainOutput } from "../types/UpdateUserPoolDomainOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/UpdateUserPoolDomainInput";
export * from "../types/UpdateUserPoolDomainOutput";
export * from "../types/UpdateUserPoolDomainExceptionsUnion";

export class UpdateUserPoolDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserPoolDomainInput,
      OutputTypesUnion,
      UpdateUserPoolDomainOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUserPoolDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserPoolDomainInput,
    UpdateUserPoolDomainOutput,
    Blob
  >();

  constructor(readonly input: UpdateUserPoolDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserPoolDomainInput,
    UpdateUserPoolDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        UpdateUserPoolDomainInput,
        UpdateUserPoolDomainOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<UpdateUserPoolDomainInput, UpdateUserPoolDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
