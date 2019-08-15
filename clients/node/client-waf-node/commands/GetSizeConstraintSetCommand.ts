import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSizeConstraintSet } from "../model/operations/GetSizeConstraintSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSizeConstraintSetInput } from "../types/GetSizeConstraintSetInput";
import { GetSizeConstraintSetOutput } from "../types/GetSizeConstraintSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetSizeConstraintSetInput";
export * from "../types/GetSizeConstraintSetOutput";
export * from "../types/GetSizeConstraintSetExceptionsUnion";

export class GetSizeConstraintSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSizeConstraintSetInput,
      OutputTypesUnion,
      GetSizeConstraintSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSizeConstraintSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSizeConstraintSetInput,
    GetSizeConstraintSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSizeConstraintSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSizeConstraintSetInput,
    GetSizeConstraintSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSizeConstraintSetInput, GetSizeConstraintSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
