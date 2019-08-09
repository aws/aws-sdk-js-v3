import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPhoneNumber } from "../model/GetPhoneNumber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPhoneNumberInput } from "../types/GetPhoneNumberInput";
import { GetPhoneNumberOutput } from "../types/GetPhoneNumberOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetPhoneNumberInput";
export * from "../types/GetPhoneNumberOutput";
export * from "../types/GetPhoneNumberExceptionsUnion";

export class GetPhoneNumberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPhoneNumberInput,
      OutputTypesUnion,
      GetPhoneNumberOutput,
      ChimeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetPhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPhoneNumberInput,
    GetPhoneNumberOutput,
    Uint8Array
  >();

  constructor(readonly input: GetPhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPhoneNumberInput, GetPhoneNumberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPhoneNumberInput, GetPhoneNumberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
