import * as __aws_sdk_apply_body_checksum_middleware from "@aws-sdk/apply-body-checksum-middleware";
import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_md5_universal from "@aws-sdk/md5-universal";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as __aws_sdk_util_base64_universal from "@aws-sdk/util-base64-universal";
import { PutBucketTagging } from "../model/PutBucketTagging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBucketTaggingInput } from "../types/PutBucketTaggingInput";
import { PutBucketTaggingOutput } from "../types/PutBucketTaggingOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutBucketTaggingInput";
export * from "../types/PutBucketTaggingOutput";
export * from "../types/PutBucketTaggingExceptionsUnion";

export class PutBucketTaggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBucketTaggingInput,
      OutputTypesUnion,
      PutBucketTaggingOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutBucketTagging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBucketTaggingInput,
    PutBucketTaggingOutput,
    Uint8Array
  >();

  constructor(readonly input: PutBucketTaggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<PutBucketTaggingInput, PutBucketTaggingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_bucket_endpoint_middleware.bucketEndpointMiddleware({
        forcePathStyle: configuration.forcePathStyle,
        preformedBucketEndpoint: configuration.bucketEndpoint,
        useAccelerateEndpoint: configuration.useAccelerateEndpoint,
        useDualstackEndpoint: configuration.useDualstackEndpoint
      }),
      {
        step: "build",
        priority: 0
      }
    );
    stack.add(
      __aws_sdk_apply_body_checksum_middleware.applyBodyChecksumMiddleware(
        "Content-MD5",
        configuration.md5,
        configuration.base64Encoder,
        configuration.streamHasher
      ),
      {
        step: "build",
        priority: 0,
        tags: { BODY_CHECKSUM: true }
      }
    );
    return stack.resolve(
      handler<PutBucketTaggingInput, PutBucketTaggingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
