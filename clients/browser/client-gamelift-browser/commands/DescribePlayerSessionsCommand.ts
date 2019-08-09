import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePlayerSessions } from "../model/DescribePlayerSessions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePlayerSessionsInput } from "../types/DescribePlayerSessionsInput";
import { DescribePlayerSessionsOutput } from "../types/DescribePlayerSessionsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribePlayerSessionsInput";
export * from "../types/DescribePlayerSessionsOutput";
export * from "../types/DescribePlayerSessionsExceptionsUnion";

export class DescribePlayerSessionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePlayerSessionsInput,
      OutputTypesUnion,
      DescribePlayerSessionsOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePlayerSessions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePlayerSessionsInput,
    DescribePlayerSessionsOutput,
    Blob
  >();

  constructor(readonly input: DescribePlayerSessionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePlayerSessionsInput,
    DescribePlayerSessionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePlayerSessionsInput, DescribePlayerSessionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
