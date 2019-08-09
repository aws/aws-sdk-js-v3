import * as __aws_crypto_sha256_universal from "@aws-crypto/sha256-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResourceServers } from "../model/ListResourceServers";
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
      Uint8Array
    > {
  readonly model = ListResourceServers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceServersInput,
    ListResourceServersOutput,
    Uint8Array
  >();

  constructor(readonly input: ListResourceServersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
        InputTypesUnion,
        OutputTypesUnion,
        Uint8Array
      >(this.config.signer),
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
