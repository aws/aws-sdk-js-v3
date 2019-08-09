import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateKeysAndCertificate } from "../model/CreateKeysAndCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateKeysAndCertificateInput } from "../types/CreateKeysAndCertificateInput";
import { CreateKeysAndCertificateOutput } from "../types/CreateKeysAndCertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateKeysAndCertificateInput";
export * from "../types/CreateKeysAndCertificateOutput";
export * from "../types/CreateKeysAndCertificateExceptionsUnion";

export class CreateKeysAndCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateKeysAndCertificateInput,
      OutputTypesUnion,
      CreateKeysAndCertificateOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = CreateKeysAndCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateKeysAndCertificateInput,
    CreateKeysAndCertificateOutput,
    Blob
  >();

  constructor(readonly input: CreateKeysAndCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateKeysAndCertificateInput,
    CreateKeysAndCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateKeysAndCertificateInput, CreateKeysAndCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
