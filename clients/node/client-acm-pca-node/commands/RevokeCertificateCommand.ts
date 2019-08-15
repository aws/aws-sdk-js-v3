import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RevokeCertificate } from "../model/operations/RevokeCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeCertificateInput } from "../types/RevokeCertificateInput";
import { RevokeCertificateOutput } from "../types/RevokeCertificateOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/RevokeCertificateInput";
export * from "../types/RevokeCertificateOutput";
export * from "../types/RevokeCertificateExceptionsUnion";

export class RevokeCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeCertificateInput,
      OutputTypesUnion,
      RevokeCertificateOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RevokeCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeCertificateInput,
    RevokeCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: RevokeCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<RevokeCertificateInput, RevokeCertificateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeCertificateInput, RevokeCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
