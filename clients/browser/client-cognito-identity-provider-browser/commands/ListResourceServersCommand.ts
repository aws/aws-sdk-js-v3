import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResourceServers } from "../model/operations/ListResourceServers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourceServersInput } from "../types/ListResourceServersInput";
import { ListResourceServersOutput } from "../types/ListResourceServersOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ListResourceServersInput";
export * from "../types/ListResourceServersOutput";
export * from "../types/ListResourceServersExceptionsUnion";

export class ListResourceServersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourceServersInput,
      OutputTypesUnion,
      ListResourceServersOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ListResourceServers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceServersInput,
    ListResourceServersOutput,
    Blob
  >();

  constructor(readonly input: ListResourceServersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourceServersInput,
    ListResourceServersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        ListResourceServersInput,
        ListResourceServersOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<ListResourceServersInput, ListResourceServersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
