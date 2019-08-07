import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopStreamEncryption } from "../model/StopStreamEncryption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopStreamEncryptionInput } from "../types/StopStreamEncryptionInput";
import { StopStreamEncryptionOutput } from "../types/StopStreamEncryptionOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/StopStreamEncryptionInput";
export * from "../types/StopStreamEncryptionOutput";
export * from "../types/StopStreamEncryptionExceptionsUnion";

export class StopStreamEncryptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopStreamEncryptionInput,
      OutputTypesUnion,
      StopStreamEncryptionOutput,
      KinesisResolvedConfiguration,
      Blob
    > {
  readonly model = StopStreamEncryption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopStreamEncryptionInput,
    StopStreamEncryptionOutput,
    Blob
  >();

  constructor(readonly input: StopStreamEncryptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopStreamEncryptionInput,
    StopStreamEncryptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopStreamEncryptionInput, StopStreamEncryptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
