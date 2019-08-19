import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveTagsFromCertificate } from "../model/operations/RemoveTagsFromCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveTagsFromCertificateInput } from "../types/RemoveTagsFromCertificateInput";
import { RemoveTagsFromCertificateOutput } from "../types/RemoveTagsFromCertificateOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/RemoveTagsFromCertificateInput";
export * from "../types/RemoveTagsFromCertificateOutput";
export * from "../types/RemoveTagsFromCertificateExceptionsUnion";

export class RemoveTagsFromCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveTagsFromCertificateInput,
      OutputTypesUnion,
      RemoveTagsFromCertificateOutput,
      ACMResolvedConfiguration,
      Blob
    > {
  readonly model = RemoveTagsFromCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveTagsFromCertificateInput,
    RemoveTagsFromCertificateOutput,
    Blob
  >();

  constructor(readonly input: RemoveTagsFromCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveTagsFromCertificateInput,
    RemoveTagsFromCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveTagsFromCertificateInput, RemoveTagsFromCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
