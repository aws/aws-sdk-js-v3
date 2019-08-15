import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUsersInGroup } from "../model/operations/ListUsersInGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUsersInGroupInput } from "../types/ListUsersInGroupInput";
import { ListUsersInGroupOutput } from "../types/ListUsersInGroupOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ListUsersInGroupInput";
export * from "../types/ListUsersInGroupOutput";
export * from "../types/ListUsersInGroupExceptionsUnion";

export class ListUsersInGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUsersInGroupInput,
      OutputTypesUnion,
      ListUsersInGroupOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ListUsersInGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUsersInGroupInput,
    ListUsersInGroupOutput,
    Blob
  >();

  constructor(readonly input: ListUsersInGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUsersInGroupInput, ListUsersInGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        ListUsersInGroupInput,
        ListUsersInGroupOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<ListUsersInGroupInput, ListUsersInGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
