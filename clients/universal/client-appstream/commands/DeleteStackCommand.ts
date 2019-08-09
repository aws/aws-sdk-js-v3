import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteStack } from "../model/DeleteStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStackInput } from "../types/DeleteStackInput";
import { DeleteStackOutput } from "../types/DeleteStackOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DeleteStackInput";
export * from "../types/DeleteStackOutput";
export * from "../types/DeleteStackExceptionsUnion";

export class DeleteStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStackInput,
      OutputTypesUnion,
      DeleteStackOutput,
      AppStreamResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStackInput,
    DeleteStackOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteStackInput, DeleteStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteStackInput, DeleteStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
