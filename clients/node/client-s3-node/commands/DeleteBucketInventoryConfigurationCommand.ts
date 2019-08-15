import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBucketInventoryConfiguration } from "../model/operations/DeleteBucketInventoryConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketInventoryConfigurationInput } from "../types/DeleteBucketInventoryConfigurationInput";
import { DeleteBucketInventoryConfigurationOutput } from "../types/DeleteBucketInventoryConfigurationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketInventoryConfigurationInput";
export * from "../types/DeleteBucketInventoryConfigurationOutput";
export * from "../types/DeleteBucketInventoryConfigurationExceptionsUnion";

export class DeleteBucketInventoryConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketInventoryConfigurationInput,
      OutputTypesUnion,
      DeleteBucketInventoryConfigurationOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBucketInventoryConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketInventoryConfigurationInput,
    DeleteBucketInventoryConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBucketInventoryConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBucketInventoryConfigurationInput,
    DeleteBucketInventoryConfigurationOutput
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
        DeleteBucketInventoryConfigurationInput,
        DeleteBucketInventoryConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
