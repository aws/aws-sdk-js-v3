import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteByteMatchSet } from "../model/operations/DeleteByteMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteByteMatchSetInput } from "../types/DeleteByteMatchSetInput";
import { DeleteByteMatchSetOutput } from "../types/DeleteByteMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DeleteByteMatchSetInput";
export * from "../types/DeleteByteMatchSetOutput";
export * from "../types/DeleteByteMatchSetExceptionsUnion";

export class DeleteByteMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteByteMatchSetInput,
      OutputTypesUnion,
      DeleteByteMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteByteMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteByteMatchSetInput,
    DeleteByteMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteByteMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteByteMatchSetInput,
    DeleteByteMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteByteMatchSetInput, DeleteByteMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
