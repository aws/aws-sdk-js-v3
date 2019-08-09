import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCacheClusters } from "../model/DescribeCacheClusters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCacheClustersInput } from "../types/DescribeCacheClustersInput";
import { DescribeCacheClustersOutput } from "../types/DescribeCacheClustersOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeCacheClustersInput";
export * from "../types/DescribeCacheClustersOutput";
export * from "../types/DescribeCacheClustersExceptionsUnion";

export class DescribeCacheClustersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCacheClustersInput,
      OutputTypesUnion,
      DescribeCacheClustersOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeCacheClusters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCacheClustersInput,
    DescribeCacheClustersOutput,
    Blob
  >();

  constructor(readonly input: DescribeCacheClustersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCacheClustersInput,
    DescribeCacheClustersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCacheClustersInput, DescribeCacheClustersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
