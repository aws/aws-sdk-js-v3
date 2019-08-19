import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifySubnetAttribute } from "../model/operations/ModifySubnetAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifySubnetAttributeInput } from "../types/ModifySubnetAttributeInput";
import { ModifySubnetAttributeOutput } from "../types/ModifySubnetAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifySubnetAttributeInput";
export * from "../types/ModifySubnetAttributeOutput";
export * from "../types/ModifySubnetAttributeExceptionsUnion";

export class ModifySubnetAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifySubnetAttributeInput,
      OutputTypesUnion,
      ModifySubnetAttributeOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifySubnetAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifySubnetAttributeInput,
    ModifySubnetAttributeOutput,
    Blob
  >();

  constructor(readonly input: ModifySubnetAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifySubnetAttributeInput,
    ModifySubnetAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifySubnetAttributeInput, ModifySubnetAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
