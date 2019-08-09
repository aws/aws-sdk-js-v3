import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetFpgaImageAttribute } from "../model/ResetFpgaImageAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetFpgaImageAttributeInput } from "../types/ResetFpgaImageAttributeInput";
import { ResetFpgaImageAttributeOutput } from "../types/ResetFpgaImageAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ResetFpgaImageAttributeInput";
export * from "../types/ResetFpgaImageAttributeOutput";
export * from "../types/ResetFpgaImageAttributeExceptionsUnion";

export class ResetFpgaImageAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetFpgaImageAttributeInput,
      OutputTypesUnion,
      ResetFpgaImageAttributeOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ResetFpgaImageAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetFpgaImageAttributeInput,
    ResetFpgaImageAttributeOutput,
    Blob
  >();

  constructor(readonly input: ResetFpgaImageAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetFpgaImageAttributeInput,
    ResetFpgaImageAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetFpgaImageAttributeInput, ResetFpgaImageAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
