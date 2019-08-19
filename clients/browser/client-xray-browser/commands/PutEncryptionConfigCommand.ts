import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutEncryptionConfig } from "../model/operations/PutEncryptionConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEncryptionConfigInput } from "../types/PutEncryptionConfigInput";
import { PutEncryptionConfigOutput } from "../types/PutEncryptionConfigOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/PutEncryptionConfigInput";
export * from "../types/PutEncryptionConfigOutput";
export * from "../types/PutEncryptionConfigExceptionsUnion";

export class PutEncryptionConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEncryptionConfigInput,
      OutputTypesUnion,
      PutEncryptionConfigOutput,
      XRayResolvedConfiguration,
      Blob
    > {
  readonly model = PutEncryptionConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEncryptionConfigInput,
    PutEncryptionConfigOutput,
    Blob
  >();

  constructor(readonly input: PutEncryptionConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutEncryptionConfigInput,
    PutEncryptionConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutEncryptionConfigInput, PutEncryptionConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
