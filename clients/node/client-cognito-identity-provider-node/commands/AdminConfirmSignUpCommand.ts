import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_region_provider from "@aws-sdk/region-provider";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AdminConfirmSignUp } from "../model/AdminConfirmSignUp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminConfirmSignUpInput } from "../types/AdminConfirmSignUpInput";
import { AdminConfirmSignUpOutput } from "../types/AdminConfirmSignUpOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminConfirmSignUpInput";
export * from "../types/AdminConfirmSignUpOutput";
export * from "../types/AdminConfirmSignUpExceptionsUnion";

export class AdminConfirmSignUpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminConfirmSignUpInput,
      OutputTypesUnion,
      AdminConfirmSignUpOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AdminConfirmSignUp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminConfirmSignUpInput,
    AdminConfirmSignUpOutput,
    _stream.Readable
  >();

  constructor(readonly input: AdminConfirmSignUpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminConfirmSignUpInput,
    AdminConfirmSignUpOutput
  > {
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
        _stream.Readable
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminConfirmSignUpInput, AdminConfirmSignUpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
