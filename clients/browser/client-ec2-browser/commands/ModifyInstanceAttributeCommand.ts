import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyInstanceAttribute } from "../model/operations/ModifyInstanceAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyInstanceAttributeInput } from "../types/ModifyInstanceAttributeInput";
import { ModifyInstanceAttributeOutput } from "../types/ModifyInstanceAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyInstanceAttributeInput";
export * from "../types/ModifyInstanceAttributeOutput";
export * from "../types/ModifyInstanceAttributeExceptionsUnion";

export class ModifyInstanceAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyInstanceAttributeInput,
      OutputTypesUnion,
      ModifyInstanceAttributeOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyInstanceAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyInstanceAttributeInput,
    ModifyInstanceAttributeOutput,
    Blob
  >();

  constructor(readonly input: ModifyInstanceAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyInstanceAttributeInput,
    ModifyInstanceAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyInstanceAttributeInput, ModifyInstanceAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
