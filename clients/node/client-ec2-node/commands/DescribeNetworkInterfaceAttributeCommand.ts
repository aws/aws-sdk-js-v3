import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeNetworkInterfaceAttribute } from "../model/operations/DescribeNetworkInterfaceAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNetworkInterfaceAttributeInput } from "../types/DescribeNetworkInterfaceAttributeInput";
import { DescribeNetworkInterfaceAttributeOutput } from "../types/DescribeNetworkInterfaceAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeNetworkInterfaceAttributeInput";
export * from "../types/DescribeNetworkInterfaceAttributeOutput";
export * from "../types/DescribeNetworkInterfaceAttributeExceptionsUnion";

export class DescribeNetworkInterfaceAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNetworkInterfaceAttributeInput,
      OutputTypesUnion,
      DescribeNetworkInterfaceAttributeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeNetworkInterfaceAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNetworkInterfaceAttributeInput,
    DescribeNetworkInterfaceAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeNetworkInterfaceAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNetworkInterfaceAttributeInput,
    DescribeNetworkInterfaceAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeNetworkInterfaceAttributeInput,
        DescribeNetworkInterfaceAttributeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
