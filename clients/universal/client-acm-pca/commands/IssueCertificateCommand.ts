import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { IssueCertificate } from "../model/IssueCertificate";
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
      Uint8Array
    > {
  readonly model = IssueCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IssueCertificateInput,
    IssueCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: IssueCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
