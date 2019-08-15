import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRobot } from "../model/operations/DescribeRobot";
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
      _stream.Readable
    > {
  readonly model = DescribeRobot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRobotInput,
    DescribeRobotOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRobotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
