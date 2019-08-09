import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetDevEndpoints } from "../model/BatchGetDevEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetDevEndpointsInput } from "../types/BatchGetDevEndpointsInput";
import { BatchGetDevEndpointsOutput } from "../types/BatchGetDevEndpointsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchGetDevEndpointsInput";
export * from "../types/BatchGetDevEndpointsOutput";
export * from "../types/BatchGetDevEndpointsExceptionsUnion";

export class BatchGetDevEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetDevEndpointsInput,
      OutputTypesUnion,
      BatchGetDevEndpointsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetDevEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetDevEndpointsInput,
    BatchGetDevEndpointsOutput,
    Blob
  >();

  constructor(readonly input: BatchGetDevEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetDevEndpointsInput,
    BatchGetDevEndpointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetDevEndpointsInput, BatchGetDevEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
