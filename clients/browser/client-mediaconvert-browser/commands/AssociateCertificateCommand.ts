import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateCertificate } from "../model/AssociateCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateCertificateInput } from "../types/AssociateCertificateInput";
import { AssociateCertificateOutput } from "../types/AssociateCertificateOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/AssociateCertificateInput";
export * from "../types/AssociateCertificateOutput";
export * from "../types/AssociateCertificateExceptionsUnion";

export class AssociateCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateCertificateInput,
      OutputTypesUnion,
      AssociateCertificateOutput,
      MediaConvertResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateCertificateInput,
    AssociateCertificateOutput,
    Blob
  >();

  constructor(readonly input: AssociateCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateCertificateInput,
    AssociateCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateCertificateInput, AssociateCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
