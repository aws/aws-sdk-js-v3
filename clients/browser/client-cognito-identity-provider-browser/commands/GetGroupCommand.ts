import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGroup } from "../model/GetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupInput } from "../types/GetGroupInput";
import { GetGroupOutput } from "../types/GetGroupOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetGroupInput";
export * from "../types/GetGroupOutput";
export * from "../types/GetGroupExceptionsUnion";

export class GetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupInput,
      OutputTypesUnion,
      GetGroupOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = GetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupInput,
    GetGroupOutput,
    Blob
  >();

  constructor(readonly input: GetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGroupInput, GetGroupOutput> {
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
      handler<GetGroupInput, GetGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
