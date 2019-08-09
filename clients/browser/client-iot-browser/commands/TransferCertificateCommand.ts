import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TransferCertificate } from "../model/TransferCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TransferCertificateInput } from "../types/TransferCertificateInput";
import { TransferCertificateOutput } from "../types/TransferCertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/TransferCertificateInput";
export * from "../types/TransferCertificateOutput";
export * from "../types/TransferCertificateExceptionsUnion";

export class TransferCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TransferCertificateInput,
      OutputTypesUnion,
      TransferCertificateOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = TransferCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TransferCertificateInput,
    TransferCertificateOutput,
    Blob
  >();

  constructor(readonly input: TransferCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TransferCertificateInput,
    TransferCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TransferCertificateInput, TransferCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
