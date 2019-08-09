import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyImageAttribute } from "../model/ModifyImageAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyImageAttributeInput } from "../types/ModifyImageAttributeInput";
import { ModifyImageAttributeOutput } from "../types/ModifyImageAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyImageAttributeInput";
export * from "../types/ModifyImageAttributeOutput";
export * from "../types/ModifyImageAttributeExceptionsUnion";

export class ModifyImageAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyImageAttributeInput,
      OutputTypesUnion,
      ModifyImageAttributeOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyImageAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyImageAttributeInput,
    ModifyImageAttributeOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyImageAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyImageAttributeInput,
    ModifyImageAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyImageAttributeInput, ModifyImageAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
