import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteObjectTagging } from "../model/DeleteObjectTagging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteObjectTaggingInput } from "../types/DeleteObjectTaggingInput";
import { DeleteObjectTaggingOutput } from "../types/DeleteObjectTaggingOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteObjectTaggingInput";
export * from "../types/DeleteObjectTaggingOutput";
export * from "../types/DeleteObjectTaggingExceptionsUnion";

export class DeleteObjectTaggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteObjectTaggingInput,
      OutputTypesUnion,
      DeleteObjectTaggingOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteObjectTaggingInput,
    DeleteObjectTaggingOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteObjectTaggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteObjectTaggingInput,
    DeleteObjectTaggingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DeleteObjectTagging
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
      handler<DeleteObjectTaggingInput, DeleteObjectTaggingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
