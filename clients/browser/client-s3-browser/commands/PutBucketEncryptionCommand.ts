import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutBucketEncryption } from "../model/operations/PutBucketEncryption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBucketEncryptionInput } from "../types/PutBucketEncryptionInput";
import { PutBucketEncryptionOutput } from "../types/PutBucketEncryptionOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutBucketEncryptionInput";
export * from "../types/PutBucketEncryptionOutput";
export * from "../types/PutBucketEncryptionExceptionsUnion";

export class PutBucketEncryptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBucketEncryptionInput,
      OutputTypesUnion,
      PutBucketEncryptionOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = PutBucketEncryption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBucketEncryptionInput,
    PutBucketEncryptionOutput,
    Blob
  >();

  constructor(readonly input: PutBucketEncryptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutBucketEncryptionInput,
    PutBucketEncryptionOutput
  > {
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
    return stack.resolve(
      handler<PutBucketEncryptionInput, PutBucketEncryptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
