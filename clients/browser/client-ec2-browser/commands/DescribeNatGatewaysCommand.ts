import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeNatGateways } from "../model/DescribeNatGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNatGatewaysInput } from "../types/DescribeNatGatewaysInput";
import { DescribeNatGatewaysOutput } from "../types/DescribeNatGatewaysOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeNatGatewaysInput";
export * from "../types/DescribeNatGatewaysOutput";
export * from "../types/DescribeNatGatewaysExceptionsUnion";

export class DescribeNatGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNatGatewaysInput,
      OutputTypesUnion,
      DescribeNatGatewaysOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeNatGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNatGatewaysInput,
    DescribeNatGatewaysOutput,
    Blob
  >();

  constructor(readonly input: DescribeNatGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNatGatewaysInput,
    DescribeNatGatewaysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeNatGatewaysInput, DescribeNatGatewaysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
