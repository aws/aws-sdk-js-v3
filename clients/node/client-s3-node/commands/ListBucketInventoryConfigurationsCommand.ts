import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBucketInventoryConfigurations } from "../model/operations/ListBucketInventoryConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBucketInventoryConfigurationsInput } from "../types/ListBucketInventoryConfigurationsInput";
import { ListBucketInventoryConfigurationsOutput } from "../types/ListBucketInventoryConfigurationsOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/ListBucketInventoryConfigurationsInput";
export * from "../types/ListBucketInventoryConfigurationsOutput";
export * from "../types/ListBucketInventoryConfigurationsExceptionsUnion";

export class ListBucketInventoryConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBucketInventoryConfigurationsInput,
      OutputTypesUnion,
      ListBucketInventoryConfigurationsOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBucketInventoryConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBucketInventoryConfigurationsInput,
    ListBucketInventoryConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBucketInventoryConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBucketInventoryConfigurationsInput,
    ListBucketInventoryConfigurationsOutput
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
        ListBucketInventoryConfigurationsInput,
        ListBucketInventoryConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
