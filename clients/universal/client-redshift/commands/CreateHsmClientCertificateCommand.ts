import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateHsmClientCertificate } from "../model/CreateHsmClientCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHsmClientCertificateInput } from "../types/CreateHsmClientCertificateInput";
import { CreateHsmClientCertificateOutput } from "../types/CreateHsmClientCertificateOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateHsmClientCertificateInput";
export * from "../types/CreateHsmClientCertificateOutput";
export * from "../types/CreateHsmClientCertificateExceptionsUnion";

export class CreateHsmClientCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHsmClientCertificateInput,
      OutputTypesUnion,
      CreateHsmClientCertificateOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateHsmClientCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHsmClientCertificateInput,
    CreateHsmClientCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateHsmClientCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateHsmClientCertificateInput,
    CreateHsmClientCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateHsmClientCertificateInput,
        CreateHsmClientCertificateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
