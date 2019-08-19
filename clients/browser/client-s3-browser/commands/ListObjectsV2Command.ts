import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListObjectsV2 } from "../model/operations/ListObjectsV2";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListObjectsV2Input } from "../types/ListObjectsV2Input";
import { ListObjectsV2Output } from "../types/ListObjectsV2Output";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/ListObjectsV2Input";
export * from "../types/ListObjectsV2Output";
export * from "../types/ListObjectsV2ExceptionsUnion";

export class ListObjectsV2Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListObjectsV2Input,
      OutputTypesUnion,
      ListObjectsV2Output,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = ListObjectsV2;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListObjectsV2Input,
    ListObjectsV2Output,
    Blob
  >();

  constructor(readonly input: ListObjectsV2Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<ListObjectsV2Input, ListObjectsV2Output> {
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
      handler<ListObjectsV2Input, ListObjectsV2Output>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
