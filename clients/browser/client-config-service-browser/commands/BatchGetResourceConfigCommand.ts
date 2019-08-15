import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetResourceConfig } from "../model/operations/BatchGetResourceConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetResourceConfigInput } from "../types/BatchGetResourceConfigInput";
import { BatchGetResourceConfigOutput } from "../types/BatchGetResourceConfigOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/BatchGetResourceConfigInput";
export * from "../types/BatchGetResourceConfigOutput";
export * from "../types/BatchGetResourceConfigExceptionsUnion";

export class BatchGetResourceConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetResourceConfigInput,
      OutputTypesUnion,
      BatchGetResourceConfigOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetResourceConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetResourceConfigInput,
    BatchGetResourceConfigOutput,
    Blob
  >();

  constructor(readonly input: BatchGetResourceConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetResourceConfigInput,
    BatchGetResourceConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetResourceConfigInput, BatchGetResourceConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
