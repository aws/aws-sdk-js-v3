import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopDeliveryStreamEncryption } from "../model/operations/StopDeliveryStreamEncryption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopDeliveryStreamEncryptionInput } from "../types/StopDeliveryStreamEncryptionInput";
import { StopDeliveryStreamEncryptionOutput } from "../types/StopDeliveryStreamEncryptionOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/StopDeliveryStreamEncryptionInput";
export * from "../types/StopDeliveryStreamEncryptionOutput";
export * from "../types/StopDeliveryStreamEncryptionExceptionsUnion";

export class StopDeliveryStreamEncryptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopDeliveryStreamEncryptionInput,
      OutputTypesUnion,
      StopDeliveryStreamEncryptionOutput,
      FirehoseResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopDeliveryStreamEncryption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopDeliveryStreamEncryptionInput,
    StopDeliveryStreamEncryptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopDeliveryStreamEncryptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopDeliveryStreamEncryptionInput,
    StopDeliveryStreamEncryptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StopDeliveryStreamEncryptionInput,
        StopDeliveryStreamEncryptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
