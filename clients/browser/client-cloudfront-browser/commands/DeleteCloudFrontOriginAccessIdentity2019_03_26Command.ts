import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteCloudFrontOriginAccessIdentity2019_03_26 } from "../model/DeleteCloudFrontOriginAccessIdentity2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCloudFrontOriginAccessIdentity2019_03_26Input } from "../types/DeleteCloudFrontOriginAccessIdentity2019_03_26Input";
import { DeleteCloudFrontOriginAccessIdentity2019_03_26Output } from "../types/DeleteCloudFrontOriginAccessIdentity2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeleteCloudFrontOriginAccessIdentity2019_03_26Input";
export * from "../types/DeleteCloudFrontOriginAccessIdentity2019_03_26Output";
export * from "../types/DeleteCloudFrontOriginAccessIdentity2019_03_26ExceptionsUnion";

export class DeleteCloudFrontOriginAccessIdentity2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCloudFrontOriginAccessIdentity2019_03_26Input,
      OutputTypesUnion,
      DeleteCloudFrontOriginAccessIdentity2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteCloudFrontOriginAccessIdentity2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCloudFrontOriginAccessIdentity2019_03_26Input,
    DeleteCloudFrontOriginAccessIdentity2019_03_26Output,
    Blob
  >();

  constructor(
    readonly input: DeleteCloudFrontOriginAccessIdentity2019_03_26Input
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCloudFrontOriginAccessIdentity2019_03_26Input,
    DeleteCloudFrontOriginAccessIdentity2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteCloudFrontOriginAccessIdentity2019_03_26Input,
        DeleteCloudFrontOriginAccessIdentity2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
