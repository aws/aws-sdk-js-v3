import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMatchmakingRuleSets } from "../model/DescribeMatchmakingRuleSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMatchmakingRuleSetsInput } from "../types/DescribeMatchmakingRuleSetsInput";
import { DescribeMatchmakingRuleSetsOutput } from "../types/DescribeMatchmakingRuleSetsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeMatchmakingRuleSetsInput";
export * from "../types/DescribeMatchmakingRuleSetsOutput";
export * from "../types/DescribeMatchmakingRuleSetsExceptionsUnion";

export class DescribeMatchmakingRuleSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMatchmakingRuleSetsInput,
      OutputTypesUnion,
      DescribeMatchmakingRuleSetsOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMatchmakingRuleSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMatchmakingRuleSetsInput,
    DescribeMatchmakingRuleSetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMatchmakingRuleSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMatchmakingRuleSetsInput,
    DescribeMatchmakingRuleSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMatchmakingRuleSetsInput,
        DescribeMatchmakingRuleSetsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
