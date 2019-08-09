import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSizeConstraintSet } from "../model/CreateSizeConstraintSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSizeConstraintSetInput } from "../types/CreateSizeConstraintSetInput";
import { CreateSizeConstraintSetOutput } from "../types/CreateSizeConstraintSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateSizeConstraintSetInput";
export * from "../types/CreateSizeConstraintSetOutput";
export * from "../types/CreateSizeConstraintSetExceptionsUnion";

export class CreateSizeConstraintSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSizeConstraintSetInput,
      OutputTypesUnion,
      CreateSizeConstraintSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSizeConstraintSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSizeConstraintSetInput,
    CreateSizeConstraintSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSizeConstraintSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSizeConstraintSetInput,
    CreateSizeConstraintSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSizeConstraintSetInput, CreateSizeConstraintSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
