import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetAggregateResourceConfig } from "../model/BatchGetAggregateResourceConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetAggregateResourceConfigInput } from "../types/BatchGetAggregateResourceConfigInput";
import { BatchGetAggregateResourceConfigOutput } from "../types/BatchGetAggregateResourceConfigOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/BatchGetAggregateResourceConfigInput";
export * from "../types/BatchGetAggregateResourceConfigOutput";
export * from "../types/BatchGetAggregateResourceConfigExceptionsUnion";

export class BatchGetAggregateResourceConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetAggregateResourceConfigInput,
      OutputTypesUnion,
      BatchGetAggregateResourceConfigOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetAggregateResourceConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetAggregateResourceConfigInput,
    BatchGetAggregateResourceConfigOutput,
    Blob
  >();

  constructor(readonly input: BatchGetAggregateResourceConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetAggregateResourceConfigInput,
    BatchGetAggregateResourceConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchGetAggregateResourceConfigInput,
        BatchGetAggregateResourceConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
