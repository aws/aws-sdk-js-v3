import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCertificate } from "../model/operations/UpdateCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCertificateInput } from "../types/UpdateCertificateInput";
import { UpdateCertificateOutput } from "../types/UpdateCertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateCertificateInput";
export * from "../types/UpdateCertificateOutput";
export * from "../types/UpdateCertificateExceptionsUnion";

export class UpdateCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCertificateInput,
      OutputTypesUnion,
      UpdateCertificateOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCertificateInput,
    UpdateCertificateOutput,
    Blob
  >();

  constructor(readonly input: UpdateCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateCertificateInput, UpdateCertificateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCertificateInput, UpdateCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
