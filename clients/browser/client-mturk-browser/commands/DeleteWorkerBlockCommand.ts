import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteWorkerBlock } from "../model/operations/DeleteWorkerBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteWorkerBlockInput } from "../types/DeleteWorkerBlockInput";
import { DeleteWorkerBlockOutput } from "../types/DeleteWorkerBlockOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/DeleteWorkerBlockInput";
export * from "../types/DeleteWorkerBlockOutput";
export * from "../types/DeleteWorkerBlockExceptionsUnion";

export class DeleteWorkerBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteWorkerBlockInput,
      OutputTypesUnion,
      DeleteWorkerBlockOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteWorkerBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteWorkerBlockInput,
    DeleteWorkerBlockOutput,
    Blob
  >();

  constructor(readonly input: DeleteWorkerBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteWorkerBlockInput, DeleteWorkerBlockOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteWorkerBlockInput, DeleteWorkerBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
