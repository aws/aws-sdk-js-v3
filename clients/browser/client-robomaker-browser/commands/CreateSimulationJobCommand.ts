import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSimulationJob } from "../model/operations/CreateSimulationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSimulationJobInput } from "../types/CreateSimulationJobInput";
import { CreateSimulationJobOutput } from "../types/CreateSimulationJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/CreateSimulationJobInput";
export * from "../types/CreateSimulationJobOutput";
export * from "../types/CreateSimulationJobExceptionsUnion";

export class CreateSimulationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSimulationJobInput,
      OutputTypesUnion,
      CreateSimulationJobOutput,
      RoboMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSimulationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSimulationJobInput,
    CreateSimulationJobOutput,
    Blob
  >();

  constructor(readonly input: CreateSimulationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSimulationJobInput,
    CreateSimulationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSimulationJobInput, CreateSimulationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
