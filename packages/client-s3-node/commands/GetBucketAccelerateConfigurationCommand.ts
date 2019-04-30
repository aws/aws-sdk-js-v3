import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBucketAccelerateConfiguration } from "../model/GetBucketAccelerateConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBucketAccelerateConfigurationInput } from "../types/GetBucketAccelerateConfigurationInput";
import { GetBucketAccelerateConfigurationOutput } from "../types/GetBucketAccelerateConfigurationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetBucketAccelerateConfigurationInput";
export * from "../types/GetBucketAccelerateConfigurationOutput";
export * from "../types/GetBucketAccelerateConfigurationExceptionsUnion";

export class GetBucketAccelerateConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBucketAccelerateConfigurationInput,
      OutputTypesUnion,
      GetBucketAccelerateConfigurationOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBucketAccelerateConfigurationInput,
    GetBucketAccelerateConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBucketAccelerateConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBucketAccelerateConfigurationInput,
    GetBucketAccelerateConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetBucketAccelerateConfiguration
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
        GetBucketAccelerateConfigurationInput,
        GetBucketAccelerateConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
