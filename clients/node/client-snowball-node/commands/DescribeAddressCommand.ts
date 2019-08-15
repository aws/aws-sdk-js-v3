import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAddress } from "../model/operations/DescribeAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAddressInput } from "../types/DescribeAddressInput";
import { DescribeAddressOutput } from "../types/DescribeAddressOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/DescribeAddressInput";
export * from "../types/DescribeAddressOutput";
export * from "../types/DescribeAddressExceptionsUnion";

export class DescribeAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAddressInput,
      OutputTypesUnion,
      DescribeAddressOutput,
      SnowballResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAddressInput,
    DescribeAddressOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAddressInput, DescribeAddressOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAddressInput, DescribeAddressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
