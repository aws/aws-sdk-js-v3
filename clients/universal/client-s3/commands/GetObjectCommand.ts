import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_md5_universal from "@aws-sdk/md5-universal";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_ssec_middleware from "@aws-sdk/ssec-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetObject } from "../model/GetObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetObjectInput } from "../types/GetObjectInput";
import { GetObjectOutput } from "../types/GetObjectOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/GetObjectInput";
export * from "../types/GetObjectOutput";
export * from "../types/GetObjectExceptionsUnion";

export class GetObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetObjectInput,
      OutputTypesUnion,
      GetObjectOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetObjectInput,
    GetObjectOutput,
    Uint8Array
  >();

  constructor(readonly input: GetObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetObjectInput, GetObjectOutput> {
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
    stack.add(
      __aws_sdk_ssec_middleware.ssecMiddleware<GetObjectInput>({
        base64Encoder: configuration.base64Encoder,
        hashConstructor: configuration.md5,
        ssecProperties: {
          $serverSideEncryptionKey: {
            targetProperty: "SSECustomerKey",
            hashTargetProperty: "SSECustomerKeyMD5"
          }
        },
        utf8Decoder: configuration.utf8Decoder
      }),
      {
        step: "initialize",
        priority: 0
      }
    );
    return stack.resolve(
      handler<GetObjectInput, GetObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
