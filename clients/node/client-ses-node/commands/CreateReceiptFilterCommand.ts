import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateReceiptFilter } from "../model/CreateReceiptFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReceiptFilterInput } from "../types/CreateReceiptFilterInput";
import { CreateReceiptFilterOutput } from "../types/CreateReceiptFilterOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CreateReceiptFilterInput";
export * from "../types/CreateReceiptFilterOutput";
export * from "../types/CreateReceiptFilterExceptionsUnion";

export class CreateReceiptFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReceiptFilterInput,
      OutputTypesUnion,
      CreateReceiptFilterOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateReceiptFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReceiptFilterInput,
    CreateReceiptFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateReceiptFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateReceiptFilterInput,
    CreateReceiptFilterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateReceiptFilterInput, CreateReceiptFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
