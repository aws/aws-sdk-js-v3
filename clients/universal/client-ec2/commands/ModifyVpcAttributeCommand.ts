import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyVpcAttribute } from "../model/ModifyVpcAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVpcAttributeInput } from "../types/ModifyVpcAttributeInput";
import { ModifyVpcAttributeOutput } from "../types/ModifyVpcAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVpcAttributeInput";
export * from "../types/ModifyVpcAttributeOutput";
export * from "../types/ModifyVpcAttributeExceptionsUnion";

export class ModifyVpcAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVpcAttributeInput,
      OutputTypesUnion,
      ModifyVpcAttributeOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyVpcAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpcAttributeInput,
    ModifyVpcAttributeOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyVpcAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyVpcAttributeInput,
    ModifyVpcAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyVpcAttributeInput, ModifyVpcAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
