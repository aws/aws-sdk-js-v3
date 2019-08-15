import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRobotApplication } from "../model/operations/DescribeRobotApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRobotApplicationInput } from "../types/DescribeRobotApplicationInput";
import { DescribeRobotApplicationOutput } from "../types/DescribeRobotApplicationOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DescribeRobotApplicationInput";
export * from "../types/DescribeRobotApplicationOutput";
export * from "../types/DescribeRobotApplicationExceptionsUnion";

export class DescribeRobotApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRobotApplicationInput,
      OutputTypesUnion,
      DescribeRobotApplicationOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRobotApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRobotApplicationInput,
    DescribeRobotApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRobotApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRobotApplicationInput,
    DescribeRobotApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRobotApplicationInput, DescribeRobotApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
