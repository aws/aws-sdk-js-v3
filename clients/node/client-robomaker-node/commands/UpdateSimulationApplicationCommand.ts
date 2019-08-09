import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSimulationApplication } from "../model/UpdateSimulationApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSimulationApplicationInput } from "../types/UpdateSimulationApplicationInput";
import { UpdateSimulationApplicationOutput } from "../types/UpdateSimulationApplicationOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/UpdateSimulationApplicationInput";
export * from "../types/UpdateSimulationApplicationOutput";
export * from "../types/UpdateSimulationApplicationExceptionsUnion";

export class UpdateSimulationApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSimulationApplicationInput,
      OutputTypesUnion,
      UpdateSimulationApplicationOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSimulationApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSimulationApplicationInput,
    UpdateSimulationApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSimulationApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSimulationApplicationInput,
    UpdateSimulationApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateSimulationApplicationInput,
        UpdateSimulationApplicationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
