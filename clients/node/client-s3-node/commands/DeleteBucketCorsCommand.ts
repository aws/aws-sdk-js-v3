import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBucketCors } from "../model/DeleteBucketCors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketCorsInput } from "../types/DeleteBucketCorsInput";
import { DeleteBucketCorsOutput } from "../types/DeleteBucketCorsOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketCorsInput";
export * from "../types/DeleteBucketCorsOutput";
export * from "../types/DeleteBucketCorsExceptionsUnion";

export class DeleteBucketCorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketCorsInput,
      OutputTypesUnion,
      DeleteBucketCorsOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBucketCors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketCorsInput,
    DeleteBucketCorsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBucketCorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBucketCorsInput, DeleteBucketCorsOutput> {
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
      handler<DeleteBucketCorsInput, DeleteBucketCorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
