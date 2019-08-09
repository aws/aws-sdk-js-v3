import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCACertificate } from "../model/DescribeCACertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCACertificateInput } from "../types/DescribeCACertificateInput";
import { DescribeCACertificateOutput } from "../types/DescribeCACertificateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeCACertificateInput";
export * from "../types/DescribeCACertificateOutput";
export * from "../types/DescribeCACertificateExceptionsUnion";

export class DescribeCACertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCACertificateInput,
      OutputTypesUnion,
      DescribeCACertificateOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeCACertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCACertificateInput,
    DescribeCACertificateOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeCACertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCACertificateInput,
    DescribeCACertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCACertificateInput, DescribeCACertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
