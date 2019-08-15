import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteReceiptFilter } from "../model/operations/DeleteReceiptFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReceiptFilterInput } from "../types/DeleteReceiptFilterInput";
import { DeleteReceiptFilterOutput } from "../types/DeleteReceiptFilterOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteReceiptFilterInput";
export * from "../types/DeleteReceiptFilterOutput";
export * from "../types/DeleteReceiptFilterExceptionsUnion";

export class DeleteReceiptFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReceiptFilterInput,
      OutputTypesUnion,
      DeleteReceiptFilterOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteReceiptFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReceiptFilterInput,
    DeleteReceiptFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteReceiptFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteReceiptFilterInput,
    DeleteReceiptFilterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReceiptFilterInput, DeleteReceiptFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
