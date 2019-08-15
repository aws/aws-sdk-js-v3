import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteObject } from "../model/operations/DeleteObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteObjectInput } from "../types/DeleteObjectInput";
import { DeleteObjectOutput } from "../types/DeleteObjectOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteObjectInput";
export * from "../types/DeleteObjectOutput";
export * from "../types/DeleteObjectExceptionsUnion";

export class DeleteObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteObjectInput,
      OutputTypesUnion,
      DeleteObjectOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteObjectInput,
    DeleteObjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteObjectInput, DeleteObjectOutput> {
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
      handler<DeleteObjectInput, DeleteObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
