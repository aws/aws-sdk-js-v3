import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDeleteConnection } from "../model/operations/BatchDeleteConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeleteConnectionInput } from "../types/BatchDeleteConnectionInput";
import { BatchDeleteConnectionOutput } from "../types/BatchDeleteConnectionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchDeleteConnectionInput";
export * from "../types/BatchDeleteConnectionOutput";
export * from "../types/BatchDeleteConnectionExceptionsUnion";

export class BatchDeleteConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeleteConnectionInput,
      OutputTypesUnion,
      BatchDeleteConnectionOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDeleteConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteConnectionInput,
    BatchDeleteConnectionOutput,
    Blob
  >();

  constructor(readonly input: BatchDeleteConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDeleteConnectionInput,
    BatchDeleteConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDeleteConnectionInput, BatchDeleteConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
