import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutObjectRetention } from "../model/PutObjectRetention";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutObjectRetentionInput } from "../types/PutObjectRetentionInput";
import { PutObjectRetentionOutput } from "../types/PutObjectRetentionOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutObjectRetentionInput";
export * from "../types/PutObjectRetentionOutput";
export * from "../types/PutObjectRetentionExceptionsUnion";

export class PutObjectRetentionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutObjectRetentionInput,
      OutputTypesUnion,
      PutObjectRetentionOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutObjectRetention;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutObjectRetentionInput,
    PutObjectRetentionOutput,
    Uint8Array
  >();

  constructor(readonly input: PutObjectRetentionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutObjectRetentionInput,
    PutObjectRetentionOutput
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
      handler<PutObjectRetentionInput, PutObjectRetentionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
