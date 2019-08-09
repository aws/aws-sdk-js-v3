import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateServerCertificate } from "../model/UpdateServerCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServerCertificateInput } from "../types/UpdateServerCertificateInput";
import { UpdateServerCertificateOutput } from "../types/UpdateServerCertificateOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateServerCertificateInput";
export * from "../types/UpdateServerCertificateOutput";
export * from "../types/UpdateServerCertificateExceptionsUnion";

export class UpdateServerCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServerCertificateInput,
      OutputTypesUnion,
      UpdateServerCertificateOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateServerCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServerCertificateInput,
    UpdateServerCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateServerCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateServerCertificateInput,
    UpdateServerCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateServerCertificateInput, UpdateServerCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
