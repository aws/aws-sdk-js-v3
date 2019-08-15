import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeGameSessions } from "../model/operations/DescribeGameSessions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGameSessionsInput } from "../types/DescribeGameSessionsInput";
import { DescribeGameSessionsOutput } from "../types/DescribeGameSessionsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeGameSessionsInput";
export * from "../types/DescribeGameSessionsOutput";
export * from "../types/DescribeGameSessionsExceptionsUnion";

export class DescribeGameSessionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGameSessionsInput,
      OutputTypesUnion,
      DescribeGameSessionsOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeGameSessions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGameSessionsInput,
    DescribeGameSessionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeGameSessionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeGameSessionsInput,
    DescribeGameSessionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeGameSessionsInput, DescribeGameSessionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
