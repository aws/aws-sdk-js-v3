import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UploadMultipartPart } from "../model/UploadMultipartPart";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UploadMultipartPartInput } from "../types/UploadMultipartPartInput";
import { UploadMultipartPartOutput } from "../types/UploadMultipartPartOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/UploadMultipartPartInput";
export * from "../types/UploadMultipartPartOutput";
export * from "../types/UploadMultipartPartExceptionsUnion";

export class UploadMultipartPartCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UploadMultipartPartInput,
      OutputTypesUnion,
      UploadMultipartPartOutput,
      GlacierResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UploadMultipartPart;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadMultipartPartInput,
    UploadMultipartPartOutput,
    Uint8Array
  >();

  constructor(readonly input: UploadMultipartPartInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UploadMultipartPartInput,
    UploadMultipartPartOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UploadMultipartPartInput, UploadMultipartPartOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
