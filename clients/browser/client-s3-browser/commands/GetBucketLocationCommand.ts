import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBucketLocation } from "../model/operations/GetBucketLocation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBucketLocationInput } from "../types/GetBucketLocationInput";
import { GetBucketLocationOutput } from "../types/GetBucketLocationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetBucketLocationInput";
export * from "../types/GetBucketLocationOutput";
export * from "../types/GetBucketLocationExceptionsUnion";

export class GetBucketLocationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBucketLocationInput,
      OutputTypesUnion,
      GetBucketLocationOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = GetBucketLocation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBucketLocationInput,
    GetBucketLocationOutput,
    Blob
  >();

  constructor(readonly input: GetBucketLocationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBucketLocationInput, GetBucketLocationOutput> {
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
      handler<GetBucketLocationInput, GetBucketLocationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
