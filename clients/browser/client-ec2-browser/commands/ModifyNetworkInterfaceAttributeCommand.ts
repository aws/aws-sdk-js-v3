import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyNetworkInterfaceAttribute } from "../model/operations/ModifyNetworkInterfaceAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyNetworkInterfaceAttributeInput } from "../types/ModifyNetworkInterfaceAttributeInput";
import { ModifyNetworkInterfaceAttributeOutput } from "../types/ModifyNetworkInterfaceAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyNetworkInterfaceAttributeInput";
export * from "../types/ModifyNetworkInterfaceAttributeOutput";
export * from "../types/ModifyNetworkInterfaceAttributeExceptionsUnion";

export class ModifyNetworkInterfaceAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyNetworkInterfaceAttributeInput,
      OutputTypesUnion,
      ModifyNetworkInterfaceAttributeOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyNetworkInterfaceAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyNetworkInterfaceAttributeInput,
    ModifyNetworkInterfaceAttributeOutput,
    Blob
  >();

  constructor(readonly input: ModifyNetworkInterfaceAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyNetworkInterfaceAttributeInput,
    ModifyNetworkInterfaceAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyNetworkInterfaceAttributeInput,
        ModifyNetworkInterfaceAttributeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
