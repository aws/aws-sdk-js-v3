import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateCloudFrontOriginAccessIdentity2019_03_26 } from "../model/UpdateCloudFrontOriginAccessIdentity2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCloudFrontOriginAccessIdentity2019_03_26Input } from "../types/UpdateCloudFrontOriginAccessIdentity2019_03_26Input";
import { UpdateCloudFrontOriginAccessIdentity2019_03_26Output } from "../types/UpdateCloudFrontOriginAccessIdentity2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateCloudFrontOriginAccessIdentity2019_03_26Input";
export * from "../types/UpdateCloudFrontOriginAccessIdentity2019_03_26Output";
export * from "../types/UpdateCloudFrontOriginAccessIdentity2019_03_26ExceptionsUnion";

export class UpdateCloudFrontOriginAccessIdentity2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCloudFrontOriginAccessIdentity2019_03_26Input,
      OutputTypesUnion,
      UpdateCloudFrontOriginAccessIdentity2019_03_26Output,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateCloudFrontOriginAccessIdentity2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCloudFrontOriginAccessIdentity2019_03_26Input,
    UpdateCloudFrontOriginAccessIdentity2019_03_26Output,
    _stream.Readable
  >();

  constructor(
    readonly input: UpdateCloudFrontOriginAccessIdentity2019_03_26Input
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCloudFrontOriginAccessIdentity2019_03_26Input,
    UpdateCloudFrontOriginAccessIdentity2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateCloudFrontOriginAccessIdentity2019_03_26Input,
        UpdateCloudFrontOriginAccessIdentity2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
