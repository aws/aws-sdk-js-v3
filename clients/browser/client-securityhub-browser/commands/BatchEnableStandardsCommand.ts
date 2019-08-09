import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchEnableStandards } from "../model/BatchEnableStandards";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchEnableStandardsInput } from "../types/BatchEnableStandardsInput";
import { BatchEnableStandardsOutput } from "../types/BatchEnableStandardsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/BatchEnableStandardsInput";
export * from "../types/BatchEnableStandardsOutput";
export * from "../types/BatchEnableStandardsExceptionsUnion";

export class BatchEnableStandardsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchEnableStandardsInput,
      OutputTypesUnion,
      BatchEnableStandardsOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = BatchEnableStandards;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchEnableStandardsInput,
    BatchEnableStandardsOutput,
    Blob
  >();

  constructor(readonly input: BatchEnableStandardsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchEnableStandardsInput,
    BatchEnableStandardsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchEnableStandardsInput, BatchEnableStandardsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
