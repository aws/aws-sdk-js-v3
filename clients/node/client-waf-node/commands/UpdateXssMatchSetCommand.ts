import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateXssMatchSet } from "../model/operations/UpdateXssMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateXssMatchSetInput } from "../types/UpdateXssMatchSetInput";
import { UpdateXssMatchSetOutput } from "../types/UpdateXssMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/UpdateXssMatchSetInput";
export * from "../types/UpdateXssMatchSetOutput";
export * from "../types/UpdateXssMatchSetExceptionsUnion";

export class UpdateXssMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateXssMatchSetInput,
      OutputTypesUnion,
      UpdateXssMatchSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateXssMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateXssMatchSetInput,
    UpdateXssMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateXssMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateXssMatchSetInput, UpdateXssMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateXssMatchSetInput, UpdateXssMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
