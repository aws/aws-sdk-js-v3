import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMatchmaking } from "../model/operations/DescribeMatchmaking";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMatchmakingInput } from "../types/DescribeMatchmakingInput";
import { DescribeMatchmakingOutput } from "../types/DescribeMatchmakingOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeMatchmakingInput";
export * from "../types/DescribeMatchmakingOutput";
export * from "../types/DescribeMatchmakingExceptionsUnion";

export class DescribeMatchmakingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMatchmakingInput,
      OutputTypesUnion,
      DescribeMatchmakingOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeMatchmaking;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMatchmakingInput,
    DescribeMatchmakingOutput,
    Blob
  >();

  constructor(readonly input: DescribeMatchmakingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMatchmakingInput,
    DescribeMatchmakingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMatchmakingInput, DescribeMatchmakingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
