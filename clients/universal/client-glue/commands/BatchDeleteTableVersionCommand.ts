import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDeleteTableVersion } from "../model/BatchDeleteTableVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeleteTableVersionInput } from "../types/BatchDeleteTableVersionInput";
import { BatchDeleteTableVersionOutput } from "../types/BatchDeleteTableVersionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchDeleteTableVersionInput";
export * from "../types/BatchDeleteTableVersionOutput";
export * from "../types/BatchDeleteTableVersionExceptionsUnion";

export class BatchDeleteTableVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeleteTableVersionInput,
      OutputTypesUnion,
      BatchDeleteTableVersionOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = BatchDeleteTableVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteTableVersionInput,
    BatchDeleteTableVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: BatchDeleteTableVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDeleteTableVersionInput,
    BatchDeleteTableVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDeleteTableVersionInput, BatchDeleteTableVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
