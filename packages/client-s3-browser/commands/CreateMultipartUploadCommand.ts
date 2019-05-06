import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_md5_js from "@aws-sdk/md5-js";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_ssec_middleware from "@aws-sdk/ssec-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMultipartUpload } from "../model/CreateMultipartUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMultipartUploadInput } from "../types/CreateMultipartUploadInput";
import { CreateMultipartUploadOutput } from "../types/CreateMultipartUploadOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/CreateMultipartUploadInput";
export * from "../types/CreateMultipartUploadOutput";
export * from "../types/CreateMultipartUploadExceptionsUnion";

export class CreateMultipartUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMultipartUploadInput,
      OutputTypesUnion,
      CreateMultipartUploadOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateMultipartUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMultipartUploadInput,
    CreateMultipartUploadOutput,
    Blob
  >();

  constructor(readonly input: CreateMultipartUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateMultipartUploadInput,
    CreateMultipartUploadOutput
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
      __aws_sdk_ssec_middleware.ssecMiddleware<CreateMultipartUploadInput>({
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
      handler<CreateMultipartUploadInput, CreateMultipartUploadOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
