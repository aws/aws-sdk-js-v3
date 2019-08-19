import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSimulationApplication } from "../model/operations/DescribeSimulationApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSimulationApplicationInput } from "../types/DescribeSimulationApplicationInput";
import { DescribeSimulationApplicationOutput } from "../types/DescribeSimulationApplicationOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DescribeSimulationApplicationInput";
export * from "../types/DescribeSimulationApplicationOutput";
export * from "../types/DescribeSimulationApplicationExceptionsUnion";

export class DescribeSimulationApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSimulationApplicationInput,
      OutputTypesUnion,
      DescribeSimulationApplicationOutput,
      RoboMakerResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSimulationApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSimulationApplicationInput,
    DescribeSimulationApplicationOutput,
    Blob
  >();

  constructor(readonly input: DescribeSimulationApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSimulationApplicationInput,
    DescribeSimulationApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSimulationApplicationInput,
        DescribeSimulationApplicationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
