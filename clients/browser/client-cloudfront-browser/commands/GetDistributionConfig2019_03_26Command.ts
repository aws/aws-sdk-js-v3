import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDistributionConfig2019_03_26 } from "../model/GetDistributionConfig2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDistributionConfig2019_03_26Input } from "../types/GetDistributionConfig2019_03_26Input";
import { GetDistributionConfig2019_03_26Output } from "../types/GetDistributionConfig2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetDistributionConfig2019_03_26Input";
export * from "../types/GetDistributionConfig2019_03_26Output";
export * from "../types/GetDistributionConfig2019_03_26ExceptionsUnion";

export class GetDistributionConfig2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDistributionConfig2019_03_26Input,
      OutputTypesUnion,
      GetDistributionConfig2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = GetDistributionConfig2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDistributionConfig2019_03_26Input,
    GetDistributionConfig2019_03_26Output,
    Blob
  >();

  constructor(readonly input: GetDistributionConfig2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDistributionConfig2019_03_26Input,
    GetDistributionConfig2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDistributionConfig2019_03_26Input,
        GetDistributionConfig2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
