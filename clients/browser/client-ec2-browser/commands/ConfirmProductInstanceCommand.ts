import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConfirmProductInstance } from "../model/ConfirmProductInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmProductInstanceInput } from "../types/ConfirmProductInstanceInput";
import { ConfirmProductInstanceOutput } from "../types/ConfirmProductInstanceOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ConfirmProductInstanceInput";
export * from "../types/ConfirmProductInstanceOutput";
export * from "../types/ConfirmProductInstanceExceptionsUnion";

export class ConfirmProductInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmProductInstanceInput,
      OutputTypesUnion,
      ConfirmProductInstanceOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ConfirmProductInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmProductInstanceInput,
    ConfirmProductInstanceOutput,
    Blob
  >();

  constructor(readonly input: ConfirmProductInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ConfirmProductInstanceInput,
    ConfirmProductInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ConfirmProductInstanceInput, ConfirmProductInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
