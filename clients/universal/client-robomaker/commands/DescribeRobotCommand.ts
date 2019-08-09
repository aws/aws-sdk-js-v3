import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRobot } from "../model/DescribeRobot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRobotInput } from "../types/DescribeRobotInput";
import { DescribeRobotOutput } from "../types/DescribeRobotOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DescribeRobotInput";
export * from "../types/DescribeRobotOutput";
export * from "../types/DescribeRobotExceptionsUnion";

export class DescribeRobotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRobotInput,
      OutputTypesUnion,
      DescribeRobotOutput,
      RoboMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeRobot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRobotInput,
    DescribeRobotOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeRobotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeRobotInput, DescribeRobotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRobotInput, DescribeRobotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
