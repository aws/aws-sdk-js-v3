import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeFlow } from "../model/DescribeFlow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFlowInput } from "../types/DescribeFlowInput";
import { DescribeFlowOutput } from "../types/DescribeFlowOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/DescribeFlowInput";
export * from "../types/DescribeFlowOutput";
export * from "../types/DescribeFlowExceptionsUnion";

export class DescribeFlowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFlowInput,
      OutputTypesUnion,
      DescribeFlowOutput,
      MediaConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeFlow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFlowInput,
    DescribeFlowOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeFlowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeFlowInput, DescribeFlowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFlowInput, DescribeFlowOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
