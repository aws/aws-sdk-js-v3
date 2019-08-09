import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTagsForCertificate } from "../model/ListTagsForCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForCertificateInput } from "../types/ListTagsForCertificateInput";
import { ListTagsForCertificateOutput } from "../types/ListTagsForCertificateOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/ListTagsForCertificateInput";
export * from "../types/ListTagsForCertificateOutput";
export * from "../types/ListTagsForCertificateExceptionsUnion";

export class ListTagsForCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForCertificateInput,
      OutputTypesUnion,
      ListTagsForCertificateOutput,
      ACMResolvedConfiguration,
      Blob
    > {
  readonly model = ListTagsForCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForCertificateInput,
    ListTagsForCertificateOutput,
    Blob
  >();

  constructor(readonly input: ListTagsForCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTagsForCertificateInput,
    ListTagsForCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsForCertificateInput, ListTagsForCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
