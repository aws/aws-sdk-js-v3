import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartDeliveryStreamEncryption } from "../model/operations/StartDeliveryStreamEncryption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDeliveryStreamEncryptionInput } from "../types/StartDeliveryStreamEncryptionInput";
import { StartDeliveryStreamEncryptionOutput } from "../types/StartDeliveryStreamEncryptionOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/StartDeliveryStreamEncryptionInput";
export * from "../types/StartDeliveryStreamEncryptionOutput";
export * from "../types/StartDeliveryStreamEncryptionExceptionsUnion";

export class StartDeliveryStreamEncryptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDeliveryStreamEncryptionInput,
      OutputTypesUnion,
      StartDeliveryStreamEncryptionOutput,
      FirehoseResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartDeliveryStreamEncryption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDeliveryStreamEncryptionInput,
    StartDeliveryStreamEncryptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartDeliveryStreamEncryptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartDeliveryStreamEncryptionInput,
    StartDeliveryStreamEncryptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartDeliveryStreamEncryptionInput,
        StartDeliveryStreamEncryptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
