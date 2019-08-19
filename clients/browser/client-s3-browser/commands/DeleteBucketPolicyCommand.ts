import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBucketPolicy } from "../model/operations/DeleteBucketPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBucketPolicyInput } from "../types/DeleteBucketPolicyInput";
import { DeleteBucketPolicyOutput } from "../types/DeleteBucketPolicyOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/DeleteBucketPolicyInput";
export * from "../types/DeleteBucketPolicyOutput";
export * from "../types/DeleteBucketPolicyExceptionsUnion";

export class DeleteBucketPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBucketPolicyInput,
      OutputTypesUnion,
      DeleteBucketPolicyOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBucketPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBucketPolicyInput,
    DeleteBucketPolicyOutput,
    Blob
  >();

  constructor(readonly input: DeleteBucketPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBucketPolicyInput,
    DeleteBucketPolicyOutput
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
      handler<DeleteBucketPolicyInput, DeleteBucketPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
