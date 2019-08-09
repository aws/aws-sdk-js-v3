import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchUnsuspendUser } from "../model/BatchUnsuspendUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchUnsuspendUserInput } from "../types/BatchUnsuspendUserInput";
import { BatchUnsuspendUserOutput } from "../types/BatchUnsuspendUserOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/BatchUnsuspendUserInput";
export * from "../types/BatchUnsuspendUserOutput";
export * from "../types/BatchUnsuspendUserExceptionsUnion";

export class BatchUnsuspendUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchUnsuspendUserInput,
      OutputTypesUnion,
      BatchUnsuspendUserOutput,
      ChimeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = BatchUnsuspendUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchUnsuspendUserInput,
    BatchUnsuspendUserOutput,
    Uint8Array
  >();

  constructor(readonly input: BatchUnsuspendUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchUnsuspendUserInput,
    BatchUnsuspendUserOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchUnsuspendUserInput, BatchUnsuspendUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
