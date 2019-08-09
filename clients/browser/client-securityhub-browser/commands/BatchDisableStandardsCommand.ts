import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDisableStandards } from "../model/BatchDisableStandards";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDisableStandardsInput } from "../types/BatchDisableStandardsInput";
import { BatchDisableStandardsOutput } from "../types/BatchDisableStandardsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/BatchDisableStandardsInput";
export * from "../types/BatchDisableStandardsOutput";
export * from "../types/BatchDisableStandardsExceptionsUnion";

export class BatchDisableStandardsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDisableStandardsInput,
      OutputTypesUnion,
      BatchDisableStandardsOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDisableStandards;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDisableStandardsInput,
    BatchDisableStandardsOutput,
    Blob
  >();

  constructor(readonly input: BatchDisableStandardsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDisableStandardsInput,
    BatchDisableStandardsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDisableStandardsInput, BatchDisableStandardsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
