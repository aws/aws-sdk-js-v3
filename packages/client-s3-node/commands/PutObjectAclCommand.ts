import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutObjectAcl } from "../model/PutObjectAcl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutObjectAclInput } from "../types/PutObjectAclInput";
import { PutObjectAclOutput } from "../types/PutObjectAclOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/PutObjectAclInput";
export * from "../types/PutObjectAclOutput";
export * from "../types/PutObjectAclExceptionsUnion";

export class PutObjectAclCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutObjectAclInput,
      OutputTypesUnion,
      PutObjectAclOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutObjectAclInput,
    PutObjectAclOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutObjectAclInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<PutObjectAclInput, PutObjectAclOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: PutObjectAcl
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
      handler<PutObjectAclInput, PutObjectAclOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
