import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSimulationApplication } from "../model/DeleteSimulationApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSimulationApplicationInput } from "../types/DeleteSimulationApplicationInput";
import { DeleteSimulationApplicationOutput } from "../types/DeleteSimulationApplicationOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DeleteSimulationApplicationInput";
export * from "../types/DeleteSimulationApplicationOutput";
export * from "../types/DeleteSimulationApplicationExceptionsUnion";

export class DeleteSimulationApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSimulationApplicationInput,
      OutputTypesUnion,
      DeleteSimulationApplicationOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSimulationApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSimulationApplicationInput,
    DeleteSimulationApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSimulationApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSimulationApplicationInput,
    DeleteSimulationApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteSimulationApplicationInput,
        DeleteSimulationApplicationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
