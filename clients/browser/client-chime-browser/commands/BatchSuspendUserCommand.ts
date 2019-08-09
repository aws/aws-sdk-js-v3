import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchSuspendUser } from "../model/BatchSuspendUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchSuspendUserInput } from "../types/BatchSuspendUserInput";
import { BatchSuspendUserOutput } from "../types/BatchSuspendUserOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/BatchSuspendUserInput";
export * from "../types/BatchSuspendUserOutput";
export * from "../types/BatchSuspendUserExceptionsUnion";

export class BatchSuspendUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchSuspendUserInput,
      OutputTypesUnion,
      BatchSuspendUserOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = BatchSuspendUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchSuspendUserInput,
    BatchSuspendUserOutput,
    Blob
  >();

  constructor(readonly input: BatchSuspendUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchSuspendUserInput, BatchSuspendUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchSuspendUserInput, BatchSuspendUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
