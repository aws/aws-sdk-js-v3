import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetObjectLegalHold } from "../model/GetObjectLegalHold";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetObjectLegalHoldInput } from "../types/GetObjectLegalHoldInput";
import { GetObjectLegalHoldOutput } from "../types/GetObjectLegalHoldOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetObjectLegalHoldInput";
export * from "../types/GetObjectLegalHoldOutput";
export * from "../types/GetObjectLegalHoldExceptionsUnion";

export class GetObjectLegalHoldCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetObjectLegalHoldInput,
      OutputTypesUnion,
      GetObjectLegalHoldOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = GetObjectLegalHold;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetObjectLegalHoldInput,
    GetObjectLegalHoldOutput,
    Blob
  >();

  constructor(readonly input: GetObjectLegalHoldInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetObjectLegalHoldInput,
    GetObjectLegalHoldOutput
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
      handler<GetObjectLegalHoldInput, GetObjectLegalHoldOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
