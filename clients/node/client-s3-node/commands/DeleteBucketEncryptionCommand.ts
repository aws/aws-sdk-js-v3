import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBucketEncryption } from "../model/operations/DeleteBucketEncryption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketEncryptionInput } from "../types/DeleteBucketEncryptionInput";
import { DeleteBucketEncryptionOutput } from "../types/DeleteBucketEncryptionOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketEncryptionInput";
export * from "../types/DeleteBucketEncryptionOutput";
export * from "../types/DeleteBucketEncryptionExceptionsUnion";

export class DeleteBucketEncryptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketEncryptionInput,
      OutputTypesUnion,
      DeleteBucketEncryptionOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBucketEncryption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketEncryptionInput,
    DeleteBucketEncryptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBucketEncryptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBucketEncryptionInput,
    DeleteBucketEncryptionOutput
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
      handler<DeleteBucketEncryptionInput, DeleteBucketEncryptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
