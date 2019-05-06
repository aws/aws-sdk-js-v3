import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBucketMetricsConfiguration } from "../model/DeleteBucketMetricsConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketMetricsConfigurationInput } from "../types/DeleteBucketMetricsConfigurationInput";
import { DeleteBucketMetricsConfigurationOutput } from "../types/DeleteBucketMetricsConfigurationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketMetricsConfigurationInput";
export * from "../types/DeleteBucketMetricsConfigurationOutput";
export * from "../types/DeleteBucketMetricsConfigurationExceptionsUnion";

export class DeleteBucketMetricsConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketMetricsConfigurationInput,
      OutputTypesUnion,
      DeleteBucketMetricsConfigurationOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBucketMetricsConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketMetricsConfigurationInput,
    DeleteBucketMetricsConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBucketMetricsConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBucketMetricsConfigurationInput,
    DeleteBucketMetricsConfigurationOutput
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
      handler<
        DeleteBucketMetricsConfigurationInput,
        DeleteBucketMetricsConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
