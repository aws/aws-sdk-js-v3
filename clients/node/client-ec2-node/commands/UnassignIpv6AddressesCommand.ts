import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UnassignIpv6Addresses } from "../model/operations/UnassignIpv6Addresses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnassignIpv6AddressesInput } from "../types/UnassignIpv6AddressesInput";
import { UnassignIpv6AddressesOutput } from "../types/UnassignIpv6AddressesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/UnassignIpv6AddressesInput";
export * from "../types/UnassignIpv6AddressesOutput";
export * from "../types/UnassignIpv6AddressesExceptionsUnion";

export class UnassignIpv6AddressesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnassignIpv6AddressesInput,
      OutputTypesUnion,
      UnassignIpv6AddressesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UnassignIpv6Addresses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnassignIpv6AddressesInput,
    UnassignIpv6AddressesOutput,
    _stream.Readable
  >();

  constructor(readonly input: UnassignIpv6AddressesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UnassignIpv6AddressesInput,
    UnassignIpv6AddressesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnassignIpv6AddressesInput, UnassignIpv6AddressesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
