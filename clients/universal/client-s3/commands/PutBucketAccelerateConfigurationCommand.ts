import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutBucketAccelerateConfiguration } from "../model/PutBucketAccelerateConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBucketAccelerateConfigurationInput } from "../types/PutBucketAccelerateConfigurationInput";
import { PutBucketAccelerateConfigurationOutput } from "../types/PutBucketAccelerateConfigurationOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutBucketAccelerateConfigurationInput";
export * from "../types/PutBucketAccelerateConfigurationOutput";
export * from "../types/PutBucketAccelerateConfigurationExceptionsUnion";

export class PutBucketAccelerateConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBucketAccelerateConfigurationInput,
      OutputTypesUnion,
      PutBucketAccelerateConfigurationOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutBucketAccelerateConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBucketAccelerateConfigurationInput,
    PutBucketAccelerateConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: PutBucketAccelerateConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutBucketAccelerateConfigurationInput,
    PutBucketAccelerateConfigurationOutput
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
        PutBucketAccelerateConfigurationInput,
        PutBucketAccelerateConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
