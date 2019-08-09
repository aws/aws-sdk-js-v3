import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RequestCertificate } from "../model/RequestCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RequestCertificateInput } from "../types/RequestCertificateInput";
import { RequestCertificateOutput } from "../types/RequestCertificateOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/RequestCertificateInput";
export * from "../types/RequestCertificateOutput";
export * from "../types/RequestCertificateExceptionsUnion";

export class RequestCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RequestCertificateInput,
      OutputTypesUnion,
      RequestCertificateOutput,
      ACMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RequestCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RequestCertificateInput,
    RequestCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: RequestCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RequestCertificateInput,
    RequestCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RequestCertificateInput, RequestCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
