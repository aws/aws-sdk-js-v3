import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCustomerGateways } from "../model/DescribeCustomerGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCustomerGatewaysInput } from "../types/DescribeCustomerGatewaysInput";
import { DescribeCustomerGatewaysOutput } from "../types/DescribeCustomerGatewaysOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeCustomerGatewaysInput";
export * from "../types/DescribeCustomerGatewaysOutput";
export * from "../types/DescribeCustomerGatewaysExceptionsUnion";

export class DescribeCustomerGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCustomerGatewaysInput,
      OutputTypesUnion,
      DescribeCustomerGatewaysOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCustomerGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCustomerGatewaysInput,
    DescribeCustomerGatewaysOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCustomerGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCustomerGatewaysInput,
    DescribeCustomerGatewaysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCustomerGatewaysInput, DescribeCustomerGatewaysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
