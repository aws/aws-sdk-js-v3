import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEgressOnlyInternetGateways } from "../model/operations/DescribeEgressOnlyInternetGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEgressOnlyInternetGatewaysInput } from "../types/DescribeEgressOnlyInternetGatewaysInput";
import { DescribeEgressOnlyInternetGatewaysOutput } from "../types/DescribeEgressOnlyInternetGatewaysOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeEgressOnlyInternetGatewaysInput";
export * from "../types/DescribeEgressOnlyInternetGatewaysOutput";
export * from "../types/DescribeEgressOnlyInternetGatewaysExceptionsUnion";

export class DescribeEgressOnlyInternetGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEgressOnlyInternetGatewaysInput,
      OutputTypesUnion,
      DescribeEgressOnlyInternetGatewaysOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEgressOnlyInternetGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEgressOnlyInternetGatewaysInput,
    DescribeEgressOnlyInternetGatewaysOutput,
    Blob
  >();

  constructor(readonly input: DescribeEgressOnlyInternetGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEgressOnlyInternetGatewaysInput,
    DescribeEgressOnlyInternetGatewaysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEgressOnlyInternetGatewaysInput,
        DescribeEgressOnlyInternetGatewaysOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
