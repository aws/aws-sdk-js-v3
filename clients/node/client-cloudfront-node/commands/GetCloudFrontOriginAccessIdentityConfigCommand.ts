import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCloudFrontOriginAccessIdentityConfig } from "../model/operations/GetCloudFrontOriginAccessIdentityConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCloudFrontOriginAccessIdentityConfigInput } from "../types/GetCloudFrontOriginAccessIdentityConfigInput";
import { GetCloudFrontOriginAccessIdentityConfigOutput } from "../types/GetCloudFrontOriginAccessIdentityConfigOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetCloudFrontOriginAccessIdentityConfigInput";
export * from "../types/GetCloudFrontOriginAccessIdentityConfigOutput";
export * from "../types/GetCloudFrontOriginAccessIdentityConfigExceptionsUnion";

export class GetCloudFrontOriginAccessIdentityConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCloudFrontOriginAccessIdentityConfigInput,
      OutputTypesUnion,
      GetCloudFrontOriginAccessIdentityConfigOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCloudFrontOriginAccessIdentityConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCloudFrontOriginAccessIdentityConfigInput,
    GetCloudFrontOriginAccessIdentityConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCloudFrontOriginAccessIdentityConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCloudFrontOriginAccessIdentityConfigInput,
    GetCloudFrontOriginAccessIdentityConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCloudFrontOriginAccessIdentityConfigInput,
        GetCloudFrontOriginAccessIdentityConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
