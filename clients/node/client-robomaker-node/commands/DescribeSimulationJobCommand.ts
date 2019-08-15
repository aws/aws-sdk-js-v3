import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSimulationJob } from "../model/operations/DescribeSimulationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSimulationJobInput } from "../types/DescribeSimulationJobInput";
import { DescribeSimulationJobOutput } from "../types/DescribeSimulationJobOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DescribeSimulationJobInput";
export * from "../types/DescribeSimulationJobOutput";
export * from "../types/DescribeSimulationJobExceptionsUnion";

export class DescribeSimulationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSimulationJobInput,
      OutputTypesUnion,
      DescribeSimulationJobOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSimulationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSimulationJobInput,
    DescribeSimulationJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSimulationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSimulationJobInput,
    DescribeSimulationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSimulationJobInput, DescribeSimulationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
