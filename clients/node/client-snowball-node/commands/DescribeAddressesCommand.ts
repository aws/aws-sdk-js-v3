import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAddresses } from "../model/DescribeAddresses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAddressesInput } from "../types/DescribeAddressesInput";
import { DescribeAddressesOutput } from "../types/DescribeAddressesOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/DescribeAddressesInput";
export * from "../types/DescribeAddressesOutput";
export * from "../types/DescribeAddressesExceptionsUnion";

export class DescribeAddressesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAddressesInput,
      OutputTypesUnion,
      DescribeAddressesOutput,
      SnowballResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAddresses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAddressesInput,
    DescribeAddressesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAddressesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAddressesInput, DescribeAddressesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAddressesInput, DescribeAddressesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
