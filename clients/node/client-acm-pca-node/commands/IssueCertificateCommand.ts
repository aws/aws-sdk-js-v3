import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { IssueCertificate } from "../model/operations/IssueCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { IssueCertificateInput } from "../types/IssueCertificateInput";
import { IssueCertificateOutput } from "../types/IssueCertificateOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/IssueCertificateInput";
export * from "../types/IssueCertificateOutput";
export * from "../types/IssueCertificateExceptionsUnion";

export class IssueCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      IssueCertificateInput,
      OutputTypesUnion,
      IssueCertificateOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = IssueCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IssueCertificateInput,
    IssueCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: IssueCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<IssueCertificateInput, IssueCertificateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<IssueCertificateInput, IssueCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
