import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBucketWebsite } from "../model/GetBucketWebsite";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBucketWebsiteInput } from "../types/GetBucketWebsiteInput";
import { GetBucketWebsiteOutput } from "../types/GetBucketWebsiteOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetBucketWebsiteInput";
export * from "../types/GetBucketWebsiteOutput";
export * from "../types/GetBucketWebsiteExceptionsUnion";

export class GetBucketWebsiteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBucketWebsiteInput,
      OutputTypesUnion,
      GetBucketWebsiteOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetBucketWebsite;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBucketWebsiteInput,
    GetBucketWebsiteOutput,
    Uint8Array
  >();

  constructor(readonly input: GetBucketWebsiteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBucketWebsiteInput, GetBucketWebsiteOutput> {
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
      handler<GetBucketWebsiteInput, GetBucketWebsiteOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
