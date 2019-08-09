import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSizeConstraintSet } from "../model/UpdateSizeConstraintSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSizeConstraintSetInput } from "../types/UpdateSizeConstraintSetInput";
import { UpdateSizeConstraintSetOutput } from "../types/UpdateSizeConstraintSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/UpdateSizeConstraintSetInput";
export * from "../types/UpdateSizeConstraintSetOutput";
export * from "../types/UpdateSizeConstraintSetExceptionsUnion";

export class UpdateSizeConstraintSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSizeConstraintSetInput,
      OutputTypesUnion,
      UpdateSizeConstraintSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSizeConstraintSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSizeConstraintSetInput,
    UpdateSizeConstraintSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSizeConstraintSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSizeConstraintSetInput,
    UpdateSizeConstraintSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSizeConstraintSetInput, UpdateSizeConstraintSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
