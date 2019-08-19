import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateCertificate } from "../model/operations/DisassociateCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateCertificateInput } from "../types/DisassociateCertificateInput";
import { DisassociateCertificateOutput } from "../types/DisassociateCertificateOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/DisassociateCertificateInput";
export * from "../types/DisassociateCertificateOutput";
export * from "../types/DisassociateCertificateExceptionsUnion";

export class DisassociateCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateCertificateInput,
      OutputTypesUnion,
      DisassociateCertificateOutput,
      MediaConvertResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateCertificateInput,
    DisassociateCertificateOutput,
    Blob
  >();

  constructor(readonly input: DisassociateCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateCertificateInput,
    DisassociateCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateCertificateInput, DisassociateCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
