import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestartSimulationJob } from "../model/RestartSimulationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestartSimulationJobInput } from "../types/RestartSimulationJobInput";
import { RestartSimulationJobOutput } from "../types/RestartSimulationJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/RestartSimulationJobInput";
export * from "../types/RestartSimulationJobOutput";
export * from "../types/RestartSimulationJobExceptionsUnion";

export class RestartSimulationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestartSimulationJobInput,
      OutputTypesUnion,
      RestartSimulationJobOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestartSimulationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestartSimulationJobInput,
    RestartSimulationJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestartSimulationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestartSimulationJobInput,
    RestartSimulationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestartSimulationJobInput, RestartSimulationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
