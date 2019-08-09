import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeInternetGateways } from "../model/DescribeInternetGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInternetGatewaysInput } from "../types/DescribeInternetGatewaysInput";
import { DescribeInternetGatewaysOutput } from "../types/DescribeInternetGatewaysOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeInternetGatewaysInput";
export * from "../types/DescribeInternetGatewaysOutput";
export * from "../types/DescribeInternetGatewaysExceptionsUnion";

export class DescribeInternetGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInternetGatewaysInput,
      OutputTypesUnion,
      DescribeInternetGatewaysOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeInternetGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInternetGatewaysInput,
    DescribeInternetGatewaysOutput,
    Blob
  >();

  constructor(readonly input: DescribeInternetGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInternetGatewaysInput,
    DescribeInternetGatewaysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeInternetGatewaysInput, DescribeInternetGatewaysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
