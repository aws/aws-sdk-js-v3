import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutPublicAccessBlock } from "../model/operations/PutPublicAccessBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPublicAccessBlockInput } from "../types/PutPublicAccessBlockInput";
import { PutPublicAccessBlockOutput } from "../types/PutPublicAccessBlockOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutPublicAccessBlockInput";
export * from "../types/PutPublicAccessBlockOutput";
export * from "../types/PutPublicAccessBlockExceptionsUnion";

export class PutPublicAccessBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutPublicAccessBlockInput,
      OutputTypesUnion,
      PutPublicAccessBlockOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutPublicAccessBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPublicAccessBlockInput,
    PutPublicAccessBlockOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutPublicAccessBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutPublicAccessBlockInput,
    PutPublicAccessBlockOutput
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
      handler<PutPublicAccessBlockInput, PutPublicAccessBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
