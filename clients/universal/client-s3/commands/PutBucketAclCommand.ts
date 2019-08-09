import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutBucketAcl } from "../model/PutBucketAcl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBucketAclInput } from "../types/PutBucketAclInput";
import { PutBucketAclOutput } from "../types/PutBucketAclOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutBucketAclInput";
export * from "../types/PutBucketAclOutput";
export * from "../types/PutBucketAclExceptionsUnion";

export class PutBucketAclCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBucketAclInput,
      OutputTypesUnion,
      PutBucketAclOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutBucketAcl;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBucketAclInput,
    PutBucketAclOutput,
    Uint8Array
  >();

  constructor(readonly input: PutBucketAclInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<PutBucketAclInput, PutBucketAclOutput> {
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
      handler<PutBucketAclInput, PutBucketAclOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
