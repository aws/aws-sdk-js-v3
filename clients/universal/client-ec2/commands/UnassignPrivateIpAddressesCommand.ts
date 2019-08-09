import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnassignPrivateIpAddresses } from "../model/UnassignPrivateIpAddresses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnassignPrivateIpAddressesInput } from "../types/UnassignPrivateIpAddressesInput";
import { UnassignPrivateIpAddressesOutput } from "../types/UnassignPrivateIpAddressesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/UnassignPrivateIpAddressesInput";
export * from "../types/UnassignPrivateIpAddressesOutput";
export * from "../types/UnassignPrivateIpAddressesExceptionsUnion";

export class UnassignPrivateIpAddressesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnassignPrivateIpAddressesInput,
      OutputTypesUnion,
      UnassignPrivateIpAddressesOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UnassignPrivateIpAddresses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnassignPrivateIpAddressesInput,
    UnassignPrivateIpAddressesOutput,
    Uint8Array
  >();

  constructor(readonly input: UnassignPrivateIpAddressesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UnassignPrivateIpAddressesInput,
    UnassignPrivateIpAddressesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UnassignPrivateIpAddressesInput,
        UnassignPrivateIpAddressesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
