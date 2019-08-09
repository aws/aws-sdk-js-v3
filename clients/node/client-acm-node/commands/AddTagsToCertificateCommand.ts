import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddTagsToCertificate } from "../model/AddTagsToCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddTagsToCertificateInput } from "../types/AddTagsToCertificateInput";
import { AddTagsToCertificateOutput } from "../types/AddTagsToCertificateOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/AddTagsToCertificateInput";
export * from "../types/AddTagsToCertificateOutput";
export * from "../types/AddTagsToCertificateExceptionsUnion";

export class AddTagsToCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddTagsToCertificateInput,
      OutputTypesUnion,
      AddTagsToCertificateOutput,
      ACMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddTagsToCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddTagsToCertificateInput,
    AddTagsToCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddTagsToCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddTagsToCertificateInput,
    AddTagsToCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddTagsToCertificateInput, AddTagsToCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
