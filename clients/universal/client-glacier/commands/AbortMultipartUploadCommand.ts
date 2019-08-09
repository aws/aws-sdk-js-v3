import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AbortMultipartUpload } from "../model/AbortMultipartUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AbortMultipartUploadInput } from "../types/AbortMultipartUploadInput";
import { AbortMultipartUploadOutput } from "../types/AbortMultipartUploadOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/AbortMultipartUploadInput";
export * from "../types/AbortMultipartUploadOutput";
export * from "../types/AbortMultipartUploadExceptionsUnion";

export class AbortMultipartUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AbortMultipartUploadInput,
      OutputTypesUnion,
      AbortMultipartUploadOutput,
      GlacierResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AbortMultipartUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AbortMultipartUploadInput,
    AbortMultipartUploadOutput,
    Uint8Array
  >();

  constructor(readonly input: AbortMultipartUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AbortMultipartUploadInput,
    AbortMultipartUploadOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AbortMultipartUploadInput, AbortMultipartUploadOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
