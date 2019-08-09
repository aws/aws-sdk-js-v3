import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRegistrationCode } from "../model/GetRegistrationCode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRegistrationCodeInput } from "../types/GetRegistrationCodeInput";
import { GetRegistrationCodeOutput } from "../types/GetRegistrationCodeOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetRegistrationCodeInput";
export * from "../types/GetRegistrationCodeOutput";
export * from "../types/GetRegistrationCodeExceptionsUnion";

export class GetRegistrationCodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRegistrationCodeInput,
      OutputTypesUnion,
      GetRegistrationCodeOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetRegistrationCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRegistrationCodeInput,
    GetRegistrationCodeOutput,
    Uint8Array
  >();

  constructor(readonly input: GetRegistrationCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRegistrationCodeInput,
    GetRegistrationCodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRegistrationCodeInput, GetRegistrationCodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
