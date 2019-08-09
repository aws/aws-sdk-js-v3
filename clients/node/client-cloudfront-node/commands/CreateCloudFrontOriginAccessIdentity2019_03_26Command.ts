import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCloudFrontOriginAccessIdentity2019_03_26 } from "../model/CreateCloudFrontOriginAccessIdentity2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCloudFrontOriginAccessIdentity2019_03_26Input } from "../types/CreateCloudFrontOriginAccessIdentity2019_03_26Input";
import { CreateCloudFrontOriginAccessIdentity2019_03_26Output } from "../types/CreateCloudFrontOriginAccessIdentity2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateCloudFrontOriginAccessIdentity2019_03_26Input";
export * from "../types/CreateCloudFrontOriginAccessIdentity2019_03_26Output";
export * from "../types/CreateCloudFrontOriginAccessIdentity2019_03_26ExceptionsUnion";

export class CreateCloudFrontOriginAccessIdentity2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCloudFrontOriginAccessIdentity2019_03_26Input,
      OutputTypesUnion,
      CreateCloudFrontOriginAccessIdentity2019_03_26Output,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCloudFrontOriginAccessIdentity2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCloudFrontOriginAccessIdentity2019_03_26Input,
    CreateCloudFrontOriginAccessIdentity2019_03_26Output,
    _stream.Readable
  >();

  constructor(
    readonly input: CreateCloudFrontOriginAccessIdentity2019_03_26Input
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCloudFrontOriginAccessIdentity2019_03_26Input,
    CreateCloudFrontOriginAccessIdentity2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateCloudFrontOriginAccessIdentity2019_03_26Input,
        CreateCloudFrontOriginAccessIdentity2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
