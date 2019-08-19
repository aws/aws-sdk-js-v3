import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBucketTagging } from "../model/operations/DeleteBucketTagging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketTaggingInput } from "../types/DeleteBucketTaggingInput";
import { DeleteBucketTaggingOutput } from "../types/DeleteBucketTaggingOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketTaggingInput";
export * from "../types/DeleteBucketTaggingOutput";
export * from "../types/DeleteBucketTaggingExceptionsUnion";

export class DeleteBucketTaggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketTaggingInput,
      OutputTypesUnion,
      DeleteBucketTaggingOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBucketTagging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketTaggingInput,
    DeleteBucketTaggingOutput,
    Blob
  >();

  constructor(readonly input: DeleteBucketTaggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBucketTaggingInput,
    DeleteBucketTaggingOutput
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
      handler<DeleteBucketTaggingInput, DeleteBucketTaggingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
