import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_region_provider from "@aws-sdk/region-provider";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TagResource } from "../model/operations/TagResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagResourceInput } from "../types/TagResourceInput";
import { TagResourceOutput } from "../types/TagResourceOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/TagResourceInput";
export * from "../types/TagResourceOutput";
export * from "../types/TagResourceExceptionsUnion";

export class TagResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagResourceInput,
      OutputTypesUnion,
      TagResourceOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TagResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagResourceInput,
    TagResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: TagResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<TagResourceInput, TagResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        TagResourceInput,
        TagResourceOutput,
        _stream.Readable
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<TagResourceInput, TagResourceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
