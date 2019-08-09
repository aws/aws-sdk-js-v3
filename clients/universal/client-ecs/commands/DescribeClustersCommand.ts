import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClusters } from "../model/DescribeClusters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClustersInput } from "../types/DescribeClustersInput";
import { DescribeClustersOutput } from "../types/DescribeClustersOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DescribeClustersInput";
export * from "../types/DescribeClustersOutput";
export * from "../types/DescribeClustersExceptionsUnion";

export class DescribeClustersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClustersInput,
      OutputTypesUnion,
      DescribeClustersOutput,
      ECSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeClusters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClustersInput,
    DescribeClustersOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeClustersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeClustersInput, DescribeClustersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClustersInput, DescribeClustersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
