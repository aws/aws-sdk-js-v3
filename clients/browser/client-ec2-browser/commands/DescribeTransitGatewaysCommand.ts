import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTransitGateways } from "../model/DescribeTransitGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTransitGatewaysInput } from "../types/DescribeTransitGatewaysInput";
import { DescribeTransitGatewaysOutput } from "../types/DescribeTransitGatewaysOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeTransitGatewaysInput";
export * from "../types/DescribeTransitGatewaysOutput";
export * from "../types/DescribeTransitGatewaysExceptionsUnion";

export class DescribeTransitGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTransitGatewaysInput,
      OutputTypesUnion,
      DescribeTransitGatewaysOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTransitGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTransitGatewaysInput,
    DescribeTransitGatewaysOutput,
    Blob
  >();

  constructor(readonly input: DescribeTransitGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTransitGatewaysInput,
    DescribeTransitGatewaysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTransitGatewaysInput, DescribeTransitGatewaysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
