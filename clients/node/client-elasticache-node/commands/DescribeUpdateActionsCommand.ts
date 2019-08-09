import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeUpdateActions } from "../model/DescribeUpdateActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUpdateActionsInput } from "../types/DescribeUpdateActionsInput";
import { DescribeUpdateActionsOutput } from "../types/DescribeUpdateActionsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeUpdateActionsInput";
export * from "../types/DescribeUpdateActionsOutput";
export * from "../types/DescribeUpdateActionsExceptionsUnion";

export class DescribeUpdateActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUpdateActionsInput,
      OutputTypesUnion,
      DescribeUpdateActionsOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeUpdateActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUpdateActionsInput,
    DescribeUpdateActionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeUpdateActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUpdateActionsInput,
    DescribeUpdateActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeUpdateActionsInput, DescribeUpdateActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
