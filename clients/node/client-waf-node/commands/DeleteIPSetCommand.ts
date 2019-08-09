import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteIPSet } from "../model/DeleteIPSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIPSetInput } from "../types/DeleteIPSetInput";
import { DeleteIPSetOutput } from "../types/DeleteIPSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/DeleteIPSetInput";
export * from "../types/DeleteIPSetOutput";
export * from "../types/DeleteIPSetExceptionsUnion";

export class DeleteIPSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIPSetInput,
      OutputTypesUnion,
      DeleteIPSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteIPSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIPSetInput,
    DeleteIPSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteIPSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteIPSetInput, DeleteIPSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIPSetInput, DeleteIPSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
