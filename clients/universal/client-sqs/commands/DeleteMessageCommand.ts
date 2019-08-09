import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMessage } from "../model/DeleteMessage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMessageInput } from "../types/DeleteMessageInput";
import { DeleteMessageOutput } from "../types/DeleteMessageOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/DeleteMessageInput";
export * from "../types/DeleteMessageOutput";
export * from "../types/DeleteMessageExceptionsUnion";

export class DeleteMessageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMessageInput,
      OutputTypesUnion,
      DeleteMessageOutput,
      SQSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteMessage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMessageInput,
    DeleteMessageOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteMessageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteMessageInput, DeleteMessageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMessageInput, DeleteMessageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
