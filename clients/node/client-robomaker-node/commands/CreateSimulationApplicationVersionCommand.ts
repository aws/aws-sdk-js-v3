import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSimulationApplicationVersion } from "../model/operations/CreateSimulationApplicationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSimulationApplicationVersionInput } from "../types/CreateSimulationApplicationVersionInput";
import { CreateSimulationApplicationVersionOutput } from "../types/CreateSimulationApplicationVersionOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/CreateSimulationApplicationVersionInput";
export * from "../types/CreateSimulationApplicationVersionOutput";
export * from "../types/CreateSimulationApplicationVersionExceptionsUnion";

export class CreateSimulationApplicationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSimulationApplicationVersionInput,
      OutputTypesUnion,
      CreateSimulationApplicationVersionOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSimulationApplicationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSimulationApplicationVersionInput,
    CreateSimulationApplicationVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSimulationApplicationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSimulationApplicationVersionInput,
    CreateSimulationApplicationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSimulationApplicationVersionInput,
        CreateSimulationApplicationVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
