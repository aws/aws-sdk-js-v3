import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetTriggers } from "../model/operations/BatchGetTriggers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetTriggersInput } from "../types/BatchGetTriggersInput";
import { BatchGetTriggersOutput } from "../types/BatchGetTriggersOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchGetTriggersInput";
export * from "../types/BatchGetTriggersOutput";
export * from "../types/BatchGetTriggersExceptionsUnion";

export class BatchGetTriggersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetTriggersInput,
      OutputTypesUnion,
      BatchGetTriggersOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetTriggers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetTriggersInput,
    BatchGetTriggersOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetTriggersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetTriggersInput, BatchGetTriggersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetTriggersInput, BatchGetTriggersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
