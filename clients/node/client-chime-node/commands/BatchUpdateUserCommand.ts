import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchUpdateUser } from "../model/operations/BatchUpdateUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchUpdateUserInput } from "../types/BatchUpdateUserInput";
import { BatchUpdateUserOutput } from "../types/BatchUpdateUserOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/BatchUpdateUserInput";
export * from "../types/BatchUpdateUserOutput";
export * from "../types/BatchUpdateUserExceptionsUnion";

export class BatchUpdateUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchUpdateUserInput,
      OutputTypesUnion,
      BatchUpdateUserOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchUpdateUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchUpdateUserInput,
    BatchUpdateUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchUpdateUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchUpdateUserInput, BatchUpdateUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchUpdateUserInput, BatchUpdateUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
