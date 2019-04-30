import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutBucketLogging } from "../model/PutBucketLogging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBucketLoggingInput } from "../types/PutBucketLoggingInput";
import { PutBucketLoggingOutput } from "../types/PutBucketLoggingOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutBucketLoggingInput";
export * from "../types/PutBucketLoggingOutput";
export * from "../types/PutBucketLoggingExceptionsUnion";

export class PutBucketLoggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBucketLoggingInput,
      OutputTypesUnion,
      PutBucketLoggingOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBucketLoggingInput,
    PutBucketLoggingOutput,
    Blob
  >();

  constructor(readonly input: PutBucketLoggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<PutBucketLoggingInput, PutBucketLoggingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: PutBucketLogging
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
      handler<PutBucketLoggingInput, PutBucketLoggingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
