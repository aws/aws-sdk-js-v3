import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PhoneNumberValidate } from "../model/PhoneNumberValidate";
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
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PhoneNumberValidateInput,
    PhoneNumberValidateOutput,
    Blob
  >();

  constructor(readonly input: PhoneNumberValidateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
      model: PhoneNumberValidate
    };

    return stack.resolve(
      handler<PhoneNumberValidateInput, PhoneNumberValidateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
