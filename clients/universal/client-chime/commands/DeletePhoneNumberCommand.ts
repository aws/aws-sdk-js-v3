import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = DeletePhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePhoneNumberInput,
    DeletePhoneNumberOutput,
    Uint8Array
  >();

  constructor(readonly input: DeletePhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
