import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssignPrivateIpAddresses } from "../model/operations/AssignPrivateIpAddresses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssignPrivateIpAddressesInput } from "../types/AssignPrivateIpAddressesInput";
import { AssignPrivateIpAddressesOutput } from "../types/AssignPrivateIpAddressesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssignPrivateIpAddressesInput";
export * from "../types/AssignPrivateIpAddressesOutput";
export * from "../types/AssignPrivateIpAddressesExceptionsUnion";

export class AssignPrivateIpAddressesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssignPrivateIpAddressesInput,
      OutputTypesUnion,
      AssignPrivateIpAddressesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssignPrivateIpAddresses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssignPrivateIpAddressesInput,
    AssignPrivateIpAddressesOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssignPrivateIpAddressesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssignPrivateIpAddressesInput,
    AssignPrivateIpAddressesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssignPrivateIpAddressesInput, AssignPrivateIpAddressesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
