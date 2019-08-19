import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelSimulationJob } from "../model/operations/CancelSimulationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelSimulationJobInput } from "../types/CancelSimulationJobInput";
import { CancelSimulationJobOutput } from "../types/CancelSimulationJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/CancelSimulationJobInput";
export * from "../types/CancelSimulationJobOutput";
export * from "../types/CancelSimulationJobExceptionsUnion";

export class CancelSimulationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelSimulationJobInput,
      OutputTypesUnion,
      CancelSimulationJobOutput,
      RoboMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CancelSimulationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelSimulationJobInput,
    CancelSimulationJobOutput,
    Blob
  >();

  constructor(readonly input: CancelSimulationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelSimulationJobInput,
    CancelSimulationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelSimulationJobInput, CancelSimulationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
