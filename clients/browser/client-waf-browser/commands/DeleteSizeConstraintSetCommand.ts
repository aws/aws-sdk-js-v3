import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSizeConstraintSet } from "../model/operations/DeleteSizeConstraintSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSizeConstraintSetInput } from "../types/DeleteSizeConstraintSetInput";
import { DeleteSizeConstraintSetOutput } from "../types/DeleteSizeConstraintSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/DeleteSizeConstraintSetInput";
export * from "../types/DeleteSizeConstraintSetOutput";
export * from "../types/DeleteSizeConstraintSetExceptionsUnion";

export class DeleteSizeConstraintSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSizeConstraintSetInput,
      OutputTypesUnion,
      DeleteSizeConstraintSetOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSizeConstraintSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSizeConstraintSetInput,
    DeleteSizeConstraintSetOutput,
    Blob
  >();

  constructor(readonly input: DeleteSizeConstraintSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSizeConstraintSetInput,
    DeleteSizeConstraintSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSizeConstraintSetInput, DeleteSizeConstraintSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
