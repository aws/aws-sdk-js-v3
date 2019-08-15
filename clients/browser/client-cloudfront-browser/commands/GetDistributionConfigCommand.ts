import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDistributionConfig } from "../model/operations/GetDistributionConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDistributionConfigInput } from "../types/GetDistributionConfigInput";
import { GetDistributionConfigOutput } from "../types/GetDistributionConfigOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetDistributionConfigInput";
export * from "../types/GetDistributionConfigOutput";
export * from "../types/GetDistributionConfigExceptionsUnion";

export class GetDistributionConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDistributionConfigInput,
      OutputTypesUnion,
      GetDistributionConfigOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = GetDistributionConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDistributionConfigInput,
    GetDistributionConfigOutput,
    Blob
  >();

  constructor(readonly input: GetDistributionConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDistributionConfigInput,
    GetDistributionConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDistributionConfigInput, GetDistributionConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
