import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCloudFrontOriginAccessIdentity } from "../model/operations/GetCloudFrontOriginAccessIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCloudFrontOriginAccessIdentityInput } from "../types/GetCloudFrontOriginAccessIdentityInput";
import { GetCloudFrontOriginAccessIdentityOutput } from "../types/GetCloudFrontOriginAccessIdentityOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetCloudFrontOriginAccessIdentityInput";
export * from "../types/GetCloudFrontOriginAccessIdentityOutput";
export * from "../types/GetCloudFrontOriginAccessIdentityExceptionsUnion";

export class GetCloudFrontOriginAccessIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCloudFrontOriginAccessIdentityInput,
      OutputTypesUnion,
      GetCloudFrontOriginAccessIdentityOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCloudFrontOriginAccessIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCloudFrontOriginAccessIdentityInput,
    GetCloudFrontOriginAccessIdentityOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCloudFrontOriginAccessIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCloudFrontOriginAccessIdentityInput,
    GetCloudFrontOriginAccessIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCloudFrontOriginAccessIdentityInput,
        GetCloudFrontOriginAccessIdentityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
