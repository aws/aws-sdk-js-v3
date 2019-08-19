import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteXssMatchSet } from "../model/operations/DeleteXssMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteXssMatchSetInput } from "../types/DeleteXssMatchSetInput";
import { DeleteXssMatchSetOutput } from "../types/DeleteXssMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/DeleteXssMatchSetInput";
export * from "../types/DeleteXssMatchSetOutput";
export * from "../types/DeleteXssMatchSetExceptionsUnion";

export class DeleteXssMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteXssMatchSetInput,
      OutputTypesUnion,
      DeleteXssMatchSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteXssMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteXssMatchSetInput,
    DeleteXssMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteXssMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteXssMatchSetInput, DeleteXssMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteXssMatchSetInput, DeleteXssMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
