import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRobotApplication } from "../model/CreateRobotApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRobotApplicationInput } from "../types/CreateRobotApplicationInput";
import { CreateRobotApplicationOutput } from "../types/CreateRobotApplicationOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/CreateRobotApplicationInput";
export * from "../types/CreateRobotApplicationOutput";
export * from "../types/CreateRobotApplicationExceptionsUnion";

export class CreateRobotApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRobotApplicationInput,
      OutputTypesUnion,
      CreateRobotApplicationOutput,
      RoboMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateRobotApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRobotApplicationInput,
    CreateRobotApplicationOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateRobotApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRobotApplicationInput,
    CreateRobotApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRobotApplicationInput, CreateRobotApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
