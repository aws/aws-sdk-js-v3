import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterRobot } from "../model/DeregisterRobot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterRobotInput } from "../types/DeregisterRobotInput";
import { DeregisterRobotOutput } from "../types/DeregisterRobotOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DeregisterRobotInput";
export * from "../types/DeregisterRobotOutput";
export * from "../types/DeregisterRobotExceptionsUnion";

export class DeregisterRobotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterRobotInput,
      OutputTypesUnion,
      DeregisterRobotOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterRobot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterRobotInput,
    DeregisterRobotOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterRobotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DeregisterRobotInput, DeregisterRobotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterRobotInput, DeregisterRobotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
