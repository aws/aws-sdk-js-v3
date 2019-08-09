import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RenewCertificate } from "../model/RenewCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RenewCertificateInput } from "../types/RenewCertificateInput";
import { RenewCertificateOutput } from "../types/RenewCertificateOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/RenewCertificateInput";
export * from "../types/RenewCertificateOutput";
export * from "../types/RenewCertificateExceptionsUnion";

export class RenewCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RenewCertificateInput,
      OutputTypesUnion,
      RenewCertificateOutput,
      ACMResolvedConfiguration,
      Blob
    > {
  readonly model = RenewCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RenewCertificateInput,
    RenewCertificateOutput,
    Blob
  >();

  constructor(readonly input: RenewCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<RenewCertificateInput, RenewCertificateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RenewCertificateInput, RenewCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
