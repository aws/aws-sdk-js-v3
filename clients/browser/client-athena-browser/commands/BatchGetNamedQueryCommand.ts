import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetNamedQuery } from "../model/operations/BatchGetNamedQuery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetNamedQueryInput } from "../types/BatchGetNamedQueryInput";
import { BatchGetNamedQueryOutput } from "../types/BatchGetNamedQueryOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/BatchGetNamedQueryInput";
export * from "../types/BatchGetNamedQueryOutput";
export * from "../types/BatchGetNamedQueryExceptionsUnion";

export class BatchGetNamedQueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetNamedQueryInput,
      OutputTypesUnion,
      BatchGetNamedQueryOutput,
      AthenaResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetNamedQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetNamedQueryInput,
    BatchGetNamedQueryOutput,
    Blob
  >();

  constructor(readonly input: BatchGetNamedQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetNamedQueryInput,
    BatchGetNamedQueryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetNamedQueryInput, BatchGetNamedQueryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
