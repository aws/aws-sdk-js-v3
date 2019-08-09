import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMovingAddresses } from "../model/DescribeMovingAddresses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMovingAddressesInput } from "../types/DescribeMovingAddressesInput";
import { DescribeMovingAddressesOutput } from "../types/DescribeMovingAddressesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeMovingAddressesInput";
export * from "../types/DescribeMovingAddressesOutput";
export * from "../types/DescribeMovingAddressesExceptionsUnion";

export class DescribeMovingAddressesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMovingAddressesInput,
      OutputTypesUnion,
      DescribeMovingAddressesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMovingAddresses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMovingAddressesInput,
    DescribeMovingAddressesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMovingAddressesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMovingAddressesInput,
    DescribeMovingAddressesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMovingAddressesInput, DescribeMovingAddressesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
