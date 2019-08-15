import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeGameSessionPlacement } from "../model/operations/DescribeGameSessionPlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGameSessionPlacementInput } from "../types/DescribeGameSessionPlacementInput";
import { DescribeGameSessionPlacementOutput } from "../types/DescribeGameSessionPlacementOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeGameSessionPlacementInput";
export * from "../types/DescribeGameSessionPlacementOutput";
export * from "../types/DescribeGameSessionPlacementExceptionsUnion";

export class DescribeGameSessionPlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGameSessionPlacementInput,
      OutputTypesUnion,
      DescribeGameSessionPlacementOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeGameSessionPlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGameSessionPlacementInput,
    DescribeGameSessionPlacementOutput,
    Blob
  >();

  constructor(readonly input: DescribeGameSessionPlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeGameSessionPlacementInput,
    DescribeGameSessionPlacementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeGameSessionPlacementInput,
        DescribeGameSessionPlacementOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
