import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListObjects } from "../model/ListObjects";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListObjectsInput } from "../types/ListObjectsInput";
import { ListObjectsOutput } from "../types/ListObjectsOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/ListObjectsInput";
export * from "../types/ListObjectsOutput";
export * from "../types/ListObjectsExceptionsUnion";

export class ListObjectsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListObjectsInput,
      OutputTypesUnion,
      ListObjectsOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListObjects;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListObjectsInput,
    ListObjectsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListObjectsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<ListObjectsInput, ListObjectsOutput> {
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
      handler<ListObjectsInput, ListObjectsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
