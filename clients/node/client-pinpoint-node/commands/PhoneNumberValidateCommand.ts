import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PhoneNumberValidate } from "../model/operations/PhoneNumberValidate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PhoneNumberValidateInput } from "../types/PhoneNumberValidateInput";
import { PhoneNumberValidateOutput } from "../types/PhoneNumberValidateOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/PhoneNumberValidateInput";
export * from "../types/PhoneNumberValidateOutput";
export * from "../types/PhoneNumberValidateExceptionsUnion";

export class PhoneNumberValidateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PhoneNumberValidateInput,
      OutputTypesUnion,
      PhoneNumberValidateOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PhoneNumberValidate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PhoneNumberValidateInput,
    PhoneNumberValidateOutput,
    _stream.Readable
  >();

  constructor(readonly input: PhoneNumberValidateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PhoneNumberValidateInput,
    PhoneNumberValidateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PhoneNumberValidateInput, PhoneNumberValidateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
