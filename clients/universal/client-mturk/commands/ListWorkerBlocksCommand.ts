import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListWorkerBlocks } from "../model/ListWorkerBlocks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWorkerBlocksInput } from "../types/ListWorkerBlocksInput";
import { ListWorkerBlocksOutput } from "../types/ListWorkerBlocksOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListWorkerBlocksInput";
export * from "../types/ListWorkerBlocksOutput";
export * from "../types/ListWorkerBlocksExceptionsUnion";

export class ListWorkerBlocksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWorkerBlocksInput,
      OutputTypesUnion,
      ListWorkerBlocksOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListWorkerBlocks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWorkerBlocksInput,
    ListWorkerBlocksOutput,
    Uint8Array
  >();

  constructor(readonly input: ListWorkerBlocksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<ListWorkerBlocksInput, ListWorkerBlocksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListWorkerBlocksInput, ListWorkerBlocksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
