import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssignIpv6Addresses } from "../model/AssignIpv6Addresses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssignIpv6AddressesInput } from "../types/AssignIpv6AddressesInput";
import { AssignIpv6AddressesOutput } from "../types/AssignIpv6AddressesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssignIpv6AddressesInput";
export * from "../types/AssignIpv6AddressesOutput";
export * from "../types/AssignIpv6AddressesExceptionsUnion";

export class AssignIpv6AddressesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssignIpv6AddressesInput,
      OutputTypesUnion,
      AssignIpv6AddressesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AssignIpv6Addresses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssignIpv6AddressesInput,
    AssignIpv6AddressesOutput,
    Blob
  >();

  constructor(readonly input: AssignIpv6AddressesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssignIpv6AddressesInput,
    AssignIpv6AddressesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssignIpv6AddressesInput, AssignIpv6AddressesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
