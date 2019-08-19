import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeJobFlows } from "../model/operations/DescribeJobFlows";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeJobFlowsInput } from "../types/DescribeJobFlowsInput";
import { DescribeJobFlowsOutput } from "../types/DescribeJobFlowsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/DescribeJobFlowsInput";
export * from "../types/DescribeJobFlowsOutput";
export * from "../types/DescribeJobFlowsExceptionsUnion";

export class DescribeJobFlowsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeJobFlowsInput,
      OutputTypesUnion,
      DescribeJobFlowsOutput,
      EMRResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeJobFlows;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeJobFlowsInput,
    DescribeJobFlowsOutput,
    Blob
  >();

  constructor(readonly input: DescribeJobFlowsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeJobFlowsInput, DescribeJobFlowsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeJobFlowsInput, DescribeJobFlowsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
