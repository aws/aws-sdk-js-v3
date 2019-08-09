import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRobot } from "../model/DeleteRobot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRobotInput } from "../types/DeleteRobotInput";
import { DeleteRobotOutput } from "../types/DeleteRobotOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DeleteRobotInput";
export * from "../types/DeleteRobotOutput";
export * from "../types/DeleteRobotExceptionsUnion";

export class DeleteRobotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRobotInput,
      OutputTypesUnion,
      DeleteRobotOutput,
      RoboMakerResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRobot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRobotInput,
    DeleteRobotOutput,
    Blob
  >();

  constructor(readonly input: DeleteRobotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRobotInput, DeleteRobotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRobotInput, DeleteRobotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
