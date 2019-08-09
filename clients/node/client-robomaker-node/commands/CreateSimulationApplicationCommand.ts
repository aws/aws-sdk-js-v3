import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSimulationApplication } from "../model/CreateSimulationApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSimulationApplicationInput } from "../types/CreateSimulationApplicationInput";
import { CreateSimulationApplicationOutput } from "../types/CreateSimulationApplicationOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/CreateSimulationApplicationInput";
export * from "../types/CreateSimulationApplicationOutput";
export * from "../types/CreateSimulationApplicationExceptionsUnion";

export class CreateSimulationApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSimulationApplicationInput,
      OutputTypesUnion,
      CreateSimulationApplicationOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSimulationApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSimulationApplicationInput,
    CreateSimulationApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSimulationApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSimulationApplicationInput,
    CreateSimulationApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSimulationApplicationInput,
        CreateSimulationApplicationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
