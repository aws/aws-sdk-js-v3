import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterCACertificate } from "../model/RegisterCACertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterCACertificateInput } from "../types/RegisterCACertificateInput";
import { RegisterCACertificateOutput } from "../types/RegisterCACertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/RegisterCACertificateInput";
export * from "../types/RegisterCACertificateOutput";
export * from "../types/RegisterCACertificateExceptionsUnion";

export class RegisterCACertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterCACertificateInput,
      OutputTypesUnion,
      RegisterCACertificateOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterCACertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterCACertificateInput,
    RegisterCACertificateOutput,
    Blob
  >();

  constructor(readonly input: RegisterCACertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterCACertificateInput,
    RegisterCACertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterCACertificateInput, RegisterCACertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
