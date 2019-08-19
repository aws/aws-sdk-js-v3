import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBucketAnalyticsConfiguration } from "../model/operations/DeleteBucketAnalyticsConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketAnalyticsConfigurationInput } from "../types/DeleteBucketAnalyticsConfigurationInput";
import { DeleteBucketAnalyticsConfigurationOutput } from "../types/DeleteBucketAnalyticsConfigurationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketAnalyticsConfigurationInput";
export * from "../types/DeleteBucketAnalyticsConfigurationOutput";
export * from "../types/DeleteBucketAnalyticsConfigurationExceptionsUnion";

export class DeleteBucketAnalyticsConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketAnalyticsConfigurationInput,
      OutputTypesUnion,
      DeleteBucketAnalyticsConfigurationOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBucketAnalyticsConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketAnalyticsConfigurationInput,
    DeleteBucketAnalyticsConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DeleteBucketAnalyticsConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBucketAnalyticsConfigurationInput,
    DeleteBucketAnalyticsConfigurationOutput
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
        DeleteBucketAnalyticsConfigurationInput,
        DeleteBucketAnalyticsConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
