import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = AddTagsToCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddTagsToCertificateInput,
    AddTagsToCertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: AddTagsToCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
