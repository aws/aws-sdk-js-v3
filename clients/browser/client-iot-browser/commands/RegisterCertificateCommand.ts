import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterCertificate } from "../model/RegisterCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterCertificateInput } from "../types/RegisterCertificateInput";
import { RegisterCertificateOutput } from "../types/RegisterCertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/RegisterCertificateInput";
export * from "../types/RegisterCertificateOutput";
export * from "../types/RegisterCertificateExceptionsUnion";

export class RegisterCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterCertificateInput,
      OutputTypesUnion,
      RegisterCertificateOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterCertificateInput,
    RegisterCertificateOutput,
    Blob
  >();

  constructor(readonly input: RegisterCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterCertificateInput,
    RegisterCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterCertificateInput, RegisterCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
