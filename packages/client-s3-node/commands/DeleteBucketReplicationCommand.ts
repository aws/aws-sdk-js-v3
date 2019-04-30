import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBucketReplication } from "../model/DeleteBucketReplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketReplicationInput } from "../types/DeleteBucketReplicationInput";
import { DeleteBucketReplicationOutput } from "../types/DeleteBucketReplicationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketReplicationInput";
export * from "../types/DeleteBucketReplicationOutput";
export * from "../types/DeleteBucketReplicationExceptionsUnion";

export class DeleteBucketReplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketReplicationInput,
      OutputTypesUnion,
      DeleteBucketReplicationOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketReplicationInput,
    DeleteBucketReplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBucketReplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBucketReplicationInput,
    DeleteBucketReplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DeleteBucketReplication
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
      handler<DeleteBucketReplicationInput, DeleteBucketReplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
