import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUsers } from "../model/ListUsers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUsersInput } from "../types/ListUsersInput";
import { ListUsersOutput } from "../types/ListUsersOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ListUsersInput";
export * from "../types/ListUsersOutput";
export * from "../types/ListUsersExceptionsUnion";

export class ListUsersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUsersInput,
      OutputTypesUnion,
      ListUsersOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ListUsers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUsersInput,
    ListUsersOutput,
    Blob
  >();

  constructor(readonly input: ListUsersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUsersInput, ListUsersOutput> {
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
      handler<ListUsersInput, ListUsersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
