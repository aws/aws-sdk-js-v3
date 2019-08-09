import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetImageAttribute } from "../model/ResetImageAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetImageAttributeInput } from "../types/ResetImageAttributeInput";
import { ResetImageAttributeOutput } from "../types/ResetImageAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ResetImageAttributeInput";
export * from "../types/ResetImageAttributeOutput";
export * from "../types/ResetImageAttributeExceptionsUnion";

export class ResetImageAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetImageAttributeInput,
      OutputTypesUnion,
      ResetImageAttributeOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ResetImageAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetImageAttributeInput,
    ResetImageAttributeOutput,
    Uint8Array
  >();

  constructor(readonly input: ResetImageAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetImageAttributeInput,
    ResetImageAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetImageAttributeInput, ResetImageAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
