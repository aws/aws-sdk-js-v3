import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCloudFrontOriginAccessIdentity } from "../model/operations/DeleteCloudFrontOriginAccessIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCloudFrontOriginAccessIdentityInput } from "../types/DeleteCloudFrontOriginAccessIdentityInput";
import { DeleteCloudFrontOriginAccessIdentityOutput } from "../types/DeleteCloudFrontOriginAccessIdentityOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeleteCloudFrontOriginAccessIdentityInput";
export * from "../types/DeleteCloudFrontOriginAccessIdentityOutput";
export * from "../types/DeleteCloudFrontOriginAccessIdentityExceptionsUnion";

export class DeleteCloudFrontOriginAccessIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCloudFrontOriginAccessIdentityInput,
      OutputTypesUnion,
      DeleteCloudFrontOriginAccessIdentityOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCloudFrontOriginAccessIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCloudFrontOriginAccessIdentityInput,
    DeleteCloudFrontOriginAccessIdentityOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCloudFrontOriginAccessIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCloudFrontOriginAccessIdentityInput,
    DeleteCloudFrontOriginAccessIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteCloudFrontOriginAccessIdentityInput,
        DeleteCloudFrontOriginAccessIdentityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
