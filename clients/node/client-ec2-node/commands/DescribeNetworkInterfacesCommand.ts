import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeNetworkInterfaces } from "../model/operations/DescribeNetworkInterfaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNetworkInterfacesInput } from "../types/DescribeNetworkInterfacesInput";
import { DescribeNetworkInterfacesOutput } from "../types/DescribeNetworkInterfacesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeNetworkInterfacesInput";
export * from "../types/DescribeNetworkInterfacesOutput";
export * from "../types/DescribeNetworkInterfacesExceptionsUnion";

export class DescribeNetworkInterfacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNetworkInterfacesInput,
      OutputTypesUnion,
      DescribeNetworkInterfacesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeNetworkInterfaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNetworkInterfacesInput,
    DescribeNetworkInterfacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeNetworkInterfacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNetworkInterfacesInput,
    DescribeNetworkInterfacesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeNetworkInterfacesInput, DescribeNetworkInterfacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
