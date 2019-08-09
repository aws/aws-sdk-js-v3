import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCloudFrontOriginAccessIdentity2019_03_26 } from "../model/GetCloudFrontOriginAccessIdentity2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCloudFrontOriginAccessIdentity2019_03_26Input } from "../types/GetCloudFrontOriginAccessIdentity2019_03_26Input";
import { GetCloudFrontOriginAccessIdentity2019_03_26Output } from "../types/GetCloudFrontOriginAccessIdentity2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetCloudFrontOriginAccessIdentity2019_03_26Input";
export * from "../types/GetCloudFrontOriginAccessIdentity2019_03_26Output";
export * from "../types/GetCloudFrontOriginAccessIdentity2019_03_26ExceptionsUnion";

export class GetCloudFrontOriginAccessIdentity2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCloudFrontOriginAccessIdentity2019_03_26Input,
      OutputTypesUnion,
      GetCloudFrontOriginAccessIdentity2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = GetCloudFrontOriginAccessIdentity2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCloudFrontOriginAccessIdentity2019_03_26Input,
    GetCloudFrontOriginAccessIdentity2019_03_26Output,
    Blob
  >();

  constructor(
    readonly input: GetCloudFrontOriginAccessIdentity2019_03_26Input
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCloudFrontOriginAccessIdentity2019_03_26Input,
    GetCloudFrontOriginAccessIdentity2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCloudFrontOriginAccessIdentity2019_03_26Input,
        GetCloudFrontOriginAccessIdentity2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
