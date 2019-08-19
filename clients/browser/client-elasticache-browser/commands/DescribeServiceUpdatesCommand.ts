import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeServiceUpdates } from "../model/operations/DescribeServiceUpdates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeServiceUpdatesInput } from "../types/DescribeServiceUpdatesInput";
import { DescribeServiceUpdatesOutput } from "../types/DescribeServiceUpdatesOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeServiceUpdatesInput";
export * from "../types/DescribeServiceUpdatesOutput";
export * from "../types/DescribeServiceUpdatesExceptionsUnion";

export class DescribeServiceUpdatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeServiceUpdatesInput,
      OutputTypesUnion,
      DescribeServiceUpdatesOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeServiceUpdates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServiceUpdatesInput,
    DescribeServiceUpdatesOutput,
    Blob
  >();

  constructor(readonly input: DescribeServiceUpdatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeServiceUpdatesInput,
    DescribeServiceUpdatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeServiceUpdatesInput, DescribeServiceUpdatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
