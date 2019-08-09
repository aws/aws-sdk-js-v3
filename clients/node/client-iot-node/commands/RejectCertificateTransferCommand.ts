import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RejectCertificateTransfer } from "../model/RejectCertificateTransfer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectCertificateTransferInput } from "../types/RejectCertificateTransferInput";
import { RejectCertificateTransferOutput } from "../types/RejectCertificateTransferOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/RejectCertificateTransferInput";
export * from "../types/RejectCertificateTransferOutput";
export * from "../types/RejectCertificateTransferExceptionsUnion";

export class RejectCertificateTransferCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectCertificateTransferInput,
      OutputTypesUnion,
      RejectCertificateTransferOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RejectCertificateTransfer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectCertificateTransferInput,
    RejectCertificateTransferOutput,
    _stream.Readable
  >();

  constructor(readonly input: RejectCertificateTransferInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RejectCertificateTransferInput,
    RejectCertificateTransferOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RejectCertificateTransferInput, RejectCertificateTransferOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
