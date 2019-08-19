import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDescribeSimulationJob } from "../model/operations/BatchDescribeSimulationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDescribeSimulationJobInput } from "../types/BatchDescribeSimulationJobInput";
import { BatchDescribeSimulationJobOutput } from "../types/BatchDescribeSimulationJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/BatchDescribeSimulationJobInput";
export * from "../types/BatchDescribeSimulationJobOutput";
export * from "../types/BatchDescribeSimulationJobExceptionsUnion";

export class BatchDescribeSimulationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDescribeSimulationJobInput,
      OutputTypesUnion,
      BatchDescribeSimulationJobOutput,
      RoboMakerResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDescribeSimulationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDescribeSimulationJobInput,
    BatchDescribeSimulationJobOutput,
    Blob
  >();

  constructor(readonly input: BatchDescribeSimulationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDescribeSimulationJobInput,
    BatchDescribeSimulationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchDescribeSimulationJobInput,
        BatchDescribeSimulationJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
