import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetInstanceAttribute } from "../model/ResetInstanceAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetInstanceAttributeInput } from "../types/ResetInstanceAttributeInput";
import { ResetInstanceAttributeOutput } from "../types/ResetInstanceAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ResetInstanceAttributeInput";
export * from "../types/ResetInstanceAttributeOutput";
export * from "../types/ResetInstanceAttributeExceptionsUnion";

export class ResetInstanceAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetInstanceAttributeInput,
      OutputTypesUnion,
      ResetInstanceAttributeOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ResetInstanceAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetInstanceAttributeInput,
    ResetInstanceAttributeOutput,
    Uint8Array
  >();

  constructor(readonly input: ResetInstanceAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetInstanceAttributeInput,
    ResetInstanceAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetInstanceAttributeInput, ResetInstanceAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
