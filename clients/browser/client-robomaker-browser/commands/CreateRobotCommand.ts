import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRobot } from "../model/CreateRobot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRobotInput } from "../types/CreateRobotInput";
import { CreateRobotOutput } from "../types/CreateRobotOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/CreateRobotInput";
export * from "../types/CreateRobotOutput";
export * from "../types/CreateRobotExceptionsUnion";

export class CreateRobotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRobotInput,
      OutputTypesUnion,
      CreateRobotOutput,
      RoboMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateRobot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRobotInput,
    CreateRobotOutput,
    Blob
  >();

  constructor(readonly input: CreateRobotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRobotInput, CreateRobotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRobotInput, CreateRobotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
