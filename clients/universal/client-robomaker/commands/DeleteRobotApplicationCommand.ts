import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRobotApplication } from "../model/DeleteRobotApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRobotApplicationInput } from "../types/DeleteRobotApplicationInput";
import { DeleteRobotApplicationOutput } from "../types/DeleteRobotApplicationOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DeleteRobotApplicationInput";
export * from "../types/DeleteRobotApplicationOutput";
export * from "../types/DeleteRobotApplicationExceptionsUnion";

export class DeleteRobotApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRobotApplicationInput,
      OutputTypesUnion,
      DeleteRobotApplicationOutput,
      RoboMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteRobotApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRobotApplicationInput,
    DeleteRobotApplicationOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteRobotApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRobotApplicationInput,
    DeleteRobotApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRobotApplicationInput, DeleteRobotApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
