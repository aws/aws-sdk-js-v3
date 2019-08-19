import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetNetworkInterfaceAttribute } from "../model/operations/ResetNetworkInterfaceAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetNetworkInterfaceAttributeInput } from "../types/ResetNetworkInterfaceAttributeInput";
import { ResetNetworkInterfaceAttributeOutput } from "../types/ResetNetworkInterfaceAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ResetNetworkInterfaceAttributeInput";
export * from "../types/ResetNetworkInterfaceAttributeOutput";
export * from "../types/ResetNetworkInterfaceAttributeExceptionsUnion";

export class ResetNetworkInterfaceAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetNetworkInterfaceAttributeInput,
      OutputTypesUnion,
      ResetNetworkInterfaceAttributeOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ResetNetworkInterfaceAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetNetworkInterfaceAttributeInput,
    ResetNetworkInterfaceAttributeOutput,
    Blob
  >();

  constructor(readonly input: ResetNetworkInterfaceAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetNetworkInterfaceAttributeInput,
    ResetNetworkInterfaceAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ResetNetworkInterfaceAttributeInput,
        ResetNetworkInterfaceAttributeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
