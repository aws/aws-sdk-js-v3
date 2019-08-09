import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_md5_universal from "@aws-sdk/md5-universal";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_ssec_middleware from "@aws-sdk/ssec-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutObject } from "../model/PutObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutObjectInput } from "../types/PutObjectInput";
import { PutObjectOutput } from "../types/PutObjectOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutObjectInput";
export * from "../types/PutObjectOutput";
export * from "../types/PutObjectExceptionsUnion";

export class PutObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutObjectInput,
      OutputTypesUnion,
      PutObjectOutput,
      S3ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutObjectInput,
    PutObjectOutput,
    Uint8Array
  >();

  constructor(readonly input: PutObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<PutObjectInput, PutObjectOutput> {
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
    if (configuration.disableBodySigning) {
      stack.add(
        __aws_sdk_middleware_header_default.headerDefault({
          "x-amz-content-sha256": "UNSIGNED-PAYLOAD"
        }),
        {
          step: "build",
          priority: 100,
          tags: { BODY_CHECKSUM: true, UNSIGNED_PAYLOAD: true }
        }
      );
    }
    stack.add(
      __aws_sdk_ssec_middleware.ssecMiddleware<PutObjectInput>({
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
      handler<PutObjectInput, PutObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
