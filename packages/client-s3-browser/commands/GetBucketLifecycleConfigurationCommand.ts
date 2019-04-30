import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBucketLifecycleConfiguration } from "../model/GetBucketLifecycleConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBucketLifecycleConfigurationInput } from "../types/GetBucketLifecycleConfigurationInput";
import { GetBucketLifecycleConfigurationOutput } from "../types/GetBucketLifecycleConfigurationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetBucketLifecycleConfigurationInput";
export * from "../types/GetBucketLifecycleConfigurationOutput";
export * from "../types/GetBucketLifecycleConfigurationExceptionsUnion";

export class GetBucketLifecycleConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBucketLifecycleConfigurationInput,
      OutputTypesUnion,
      GetBucketLifecycleConfigurationOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBucketLifecycleConfigurationInput,
    GetBucketLifecycleConfigurationOutput,
    Blob
  >();

  constructor(readonly input: GetBucketLifecycleConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBucketLifecycleConfigurationInput,
    GetBucketLifecycleConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetBucketLifecycleConfiguration
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
    stack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "Content-Type": "application/octet-stream"
      }),
      {
        step: "build",
        priority: -50,
        tags: { "Content-Type": true }
      }
    );
    return stack.resolve(
      handler<
        GetBucketLifecycleConfigurationInput,
        GetBucketLifecycleConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
