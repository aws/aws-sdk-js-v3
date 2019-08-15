import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeGameSessionQueues } from "../model/operations/DescribeGameSessionQueues";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGameSessionQueuesInput } from "../types/DescribeGameSessionQueuesInput";
import { DescribeGameSessionQueuesOutput } from "../types/DescribeGameSessionQueuesOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeGameSessionQueuesInput";
export * from "../types/DescribeGameSessionQueuesOutput";
export * from "../types/DescribeGameSessionQueuesExceptionsUnion";

export class DescribeGameSessionQueuesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGameSessionQueuesInput,
      OutputTypesUnion,
      DescribeGameSessionQueuesOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeGameSessionQueues;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGameSessionQueuesInput,
    DescribeGameSessionQueuesOutput,
    Blob
  >();

  constructor(readonly input: DescribeGameSessionQueuesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeGameSessionQueuesInput,
    DescribeGameSessionQueuesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeGameSessionQueuesInput, DescribeGameSessionQueuesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
