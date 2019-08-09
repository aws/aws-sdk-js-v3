import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateGroup } from "../model/UpdateGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGroupInput } from "../types/UpdateGroupInput";
import { UpdateGroupOutput } from "../types/UpdateGroupOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/UpdateGroupInput";
export * from "../types/UpdateGroupOutput";
export * from "../types/UpdateGroupExceptionsUnion";

export class UpdateGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGroupInput,
      OutputTypesUnion,
      UpdateGroupOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGroupInput,
    UpdateGroupOutput,
    Blob
  >();

  constructor(readonly input: UpdateGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateGroupInput, UpdateGroupOutput> {
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
      handler<UpdateGroupInput, UpdateGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
