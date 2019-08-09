import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminAddUserToGroup } from "../model/AdminAddUserToGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminAddUserToGroupInput } from "../types/AdminAddUserToGroupInput";
import { AdminAddUserToGroupOutput } from "../types/AdminAddUserToGroupOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminAddUserToGroupInput";
export * from "../types/AdminAddUserToGroupOutput";
export * from "../types/AdminAddUserToGroupExceptionsUnion";

export class AdminAddUserToGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminAddUserToGroupInput,
      OutputTypesUnion,
      AdminAddUserToGroupOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminAddUserToGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminAddUserToGroupInput,
    AdminAddUserToGroupOutput,
    Blob
  >();

  constructor(readonly input: AdminAddUserToGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AdminAddUserToGroupInput,
    AdminAddUserToGroupOutput
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
        Blob
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminAddUserToGroupInput, AdminAddUserToGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
