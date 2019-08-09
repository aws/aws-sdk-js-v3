import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCACertificate } from "../model/UpdateCACertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCACertificateInput } from "../types/UpdateCACertificateInput";
import { UpdateCACertificateOutput } from "../types/UpdateCACertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateCACertificateInput";
export * from "../types/UpdateCACertificateOutput";
export * from "../types/UpdateCACertificateExceptionsUnion";

export class UpdateCACertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCACertificateInput,
      OutputTypesUnion,
      UpdateCACertificateOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateCACertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCACertificateInput,
    UpdateCACertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateCACertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCACertificateInput,
    UpdateCACertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCACertificateInput, UpdateCACertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
