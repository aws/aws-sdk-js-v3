import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GenerateDataSet } from "../model/operations/GenerateDataSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GenerateDataSetInput } from "../types/GenerateDataSetInput";
import { GenerateDataSetOutput } from "../types/GenerateDataSetOutput";
import { MarketplaceCommerceAnalyticsResolvedConfiguration } from "../MarketplaceCommerceAnalyticsConfiguration";
export * from "../types/GenerateDataSetInput";
export * from "../types/GenerateDataSetOutput";
export * from "../types/GenerateDataSetExceptionsUnion";

export class GenerateDataSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GenerateDataSetInput,
      OutputTypesUnion,
      GenerateDataSetOutput,
      MarketplaceCommerceAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = GenerateDataSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GenerateDataSetInput,
    GenerateDataSetOutput,
    Blob
  >();

  constructor(readonly input: GenerateDataSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MarketplaceCommerceAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<GenerateDataSetInput, GenerateDataSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GenerateDataSetInput, GenerateDataSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
