import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdatePhoneNumber } from "../model/operations/UpdatePhoneNumber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePhoneNumberInput } from "../types/UpdatePhoneNumberInput";
import { UpdatePhoneNumberOutput } from "../types/UpdatePhoneNumberOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/UpdatePhoneNumberInput";
export * from "../types/UpdatePhoneNumberOutput";
export * from "../types/UpdatePhoneNumberExceptionsUnion";

export class UpdatePhoneNumberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePhoneNumberInput,
      OutputTypesUnion,
      UpdatePhoneNumberOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdatePhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePhoneNumberInput,
    UpdatePhoneNumberOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdatePhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdatePhoneNumberInput, UpdatePhoneNumberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePhoneNumberInput, UpdatePhoneNumberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
