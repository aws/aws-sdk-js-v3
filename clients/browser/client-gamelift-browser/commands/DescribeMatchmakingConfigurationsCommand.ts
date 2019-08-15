import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMatchmakingConfigurations } from "../model/operations/DescribeMatchmakingConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMatchmakingConfigurationsInput } from "../types/DescribeMatchmakingConfigurationsInput";
import { DescribeMatchmakingConfigurationsOutput } from "../types/DescribeMatchmakingConfigurationsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeMatchmakingConfigurationsInput";
export * from "../types/DescribeMatchmakingConfigurationsOutput";
export * from "../types/DescribeMatchmakingConfigurationsExceptionsUnion";

export class DescribeMatchmakingConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMatchmakingConfigurationsInput,
      OutputTypesUnion,
      DescribeMatchmakingConfigurationsOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeMatchmakingConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMatchmakingConfigurationsInput,
    DescribeMatchmakingConfigurationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeMatchmakingConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMatchmakingConfigurationsInput,
    DescribeMatchmakingConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMatchmakingConfigurationsInput,
        DescribeMatchmakingConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
