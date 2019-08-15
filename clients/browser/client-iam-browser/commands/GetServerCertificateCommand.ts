import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetServerCertificate } from "../model/operations/GetServerCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServerCertificateInput } from "../types/GetServerCertificateInput";
import { GetServerCertificateOutput } from "../types/GetServerCertificateOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetServerCertificateInput";
export * from "../types/GetServerCertificateOutput";
export * from "../types/GetServerCertificateExceptionsUnion";

export class GetServerCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServerCertificateInput,
      OutputTypesUnion,
      GetServerCertificateOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetServerCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServerCertificateInput,
    GetServerCertificateOutput,
    Blob
  >();

  constructor(readonly input: GetServerCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetServerCertificateInput,
    GetServerCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetServerCertificateInput, GetServerCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
