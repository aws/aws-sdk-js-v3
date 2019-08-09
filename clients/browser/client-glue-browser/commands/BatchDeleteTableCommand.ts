import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDeleteTable } from "../model/BatchDeleteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeleteTableInput } from "../types/BatchDeleteTableInput";
import { BatchDeleteTableOutput } from "../types/BatchDeleteTableOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchDeleteTableInput";
export * from "../types/BatchDeleteTableOutput";
export * from "../types/BatchDeleteTableExceptionsUnion";

export class BatchDeleteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeleteTableInput,
      OutputTypesUnion,
      BatchDeleteTableOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDeleteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteTableInput,
    BatchDeleteTableOutput,
    Blob
  >();

  constructor(readonly input: BatchDeleteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchDeleteTableInput, BatchDeleteTableOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDeleteTableInput, BatchDeleteTableOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
