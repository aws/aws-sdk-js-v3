import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutObjectLegalHold } from "../model/PutObjectLegalHold";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutObjectLegalHoldInput } from "../types/PutObjectLegalHoldInput";
import { PutObjectLegalHoldOutput } from "../types/PutObjectLegalHoldOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutObjectLegalHoldInput";
export * from "../types/PutObjectLegalHoldOutput";
export * from "../types/PutObjectLegalHoldExceptionsUnion";

export class PutObjectLegalHoldCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutObjectLegalHoldInput,
      OutputTypesUnion,
      PutObjectLegalHoldOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutObjectLegalHold;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutObjectLegalHoldInput,
    PutObjectLegalHoldOutput,
    Uint8Array
  >();

  constructor(readonly input: PutObjectLegalHoldInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutObjectLegalHoldInput,
    PutObjectLegalHoldOutput
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
      handler<PutObjectLegalHoldInput, PutObjectLegalHoldOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
