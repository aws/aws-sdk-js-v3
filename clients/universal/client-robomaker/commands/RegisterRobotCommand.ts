import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterRobot } from "../model/RegisterRobot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterRobotInput } from "../types/RegisterRobotInput";
import { RegisterRobotOutput } from "../types/RegisterRobotOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/RegisterRobotInput";
export * from "../types/RegisterRobotOutput";
export * from "../types/RegisterRobotExceptionsUnion";

export class RegisterRobotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterRobotInput,
      OutputTypesUnion,
      RegisterRobotOutput,
      RoboMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RegisterRobot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterRobotInput,
    RegisterRobotOutput,
    Uint8Array
  >();

  constructor(readonly input: RegisterRobotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterRobotInput, RegisterRobotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterRobotInput, RegisterRobotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
