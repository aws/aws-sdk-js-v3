import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRobotApplication } from "../model/UpdateRobotApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRobotApplicationInput } from "../types/UpdateRobotApplicationInput";
import { UpdateRobotApplicationOutput } from "../types/UpdateRobotApplicationOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/UpdateRobotApplicationInput";
export * from "../types/UpdateRobotApplicationOutput";
export * from "../types/UpdateRobotApplicationExceptionsUnion";

export class UpdateRobotApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRobotApplicationInput,
      OutputTypesUnion,
      UpdateRobotApplicationOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRobotApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRobotApplicationInput,
    UpdateRobotApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRobotApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRobotApplicationInput,
    UpdateRobotApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRobotApplicationInput, UpdateRobotApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
