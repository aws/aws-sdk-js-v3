import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCertificate } from "../model/GetCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCertificateInput } from "../types/GetCertificateInput";
import { GetCertificateOutput } from "../types/GetCertificateOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/GetCertificateInput";
export * from "../types/GetCertificateOutput";
export * from "../types/GetCertificateExceptionsUnion";

export class GetCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCertificateInput,
      OutputTypesUnion,
      GetCertificateOutput,
      ACMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCertificateInput,
    GetCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCertificateInput, GetCertificateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCertificateInput, GetCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
