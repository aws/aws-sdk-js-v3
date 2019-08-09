import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePhoneNumber } from "../model/DeletePhoneNumber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePhoneNumberInput } from "../types/DeletePhoneNumberInput";
import { DeletePhoneNumberOutput } from "../types/DeletePhoneNumberOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DeletePhoneNumberInput";
export * from "../types/DeletePhoneNumberOutput";
export * from "../types/DeletePhoneNumberExceptionsUnion";

export class DeletePhoneNumberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePhoneNumberInput,
      OutputTypesUnion,
      DeletePhoneNumberOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePhoneNumberInput,
    DeletePhoneNumberOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<DeletePhoneNumberInput, DeletePhoneNumberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePhoneNumberInput, DeletePhoneNumberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
