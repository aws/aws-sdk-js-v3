import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBucketLifecycle } from "../model/DeleteBucketLifecycle";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketLifecycleInput } from "../types/DeleteBucketLifecycleInput";
import { DeleteBucketLifecycleOutput } from "../types/DeleteBucketLifecycleOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketLifecycleInput";
export * from "../types/DeleteBucketLifecycleOutput";
export * from "../types/DeleteBucketLifecycleExceptionsUnion";

export class DeleteBucketLifecycleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketLifecycleInput,
      OutputTypesUnion,
      DeleteBucketLifecycleOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketLifecycleInput,
    DeleteBucketLifecycleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBucketLifecycleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBucketLifecycleInput,
    DeleteBucketLifecycleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DeleteBucketLifecycle
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
      handler<DeleteBucketLifecycleInput, DeleteBucketLifecycleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
