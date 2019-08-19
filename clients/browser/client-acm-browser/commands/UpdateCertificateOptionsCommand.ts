import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCertificateOptions } from "../model/operations/UpdateCertificateOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCertificateOptionsInput } from "../types/UpdateCertificateOptionsInput";
import { UpdateCertificateOptionsOutput } from "../types/UpdateCertificateOptionsOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/UpdateCertificateOptionsInput";
export * from "../types/UpdateCertificateOptionsOutput";
export * from "../types/UpdateCertificateOptionsExceptionsUnion";

export class UpdateCertificateOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCertificateOptionsInput,
      OutputTypesUnion,
      UpdateCertificateOptionsOutput,
      ACMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateCertificateOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCertificateOptionsInput,
    UpdateCertificateOptionsOutput,
    Blob
  >();

  constructor(readonly input: UpdateCertificateOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCertificateOptionsInput,
    UpdateCertificateOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCertificateOptionsInput, UpdateCertificateOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
