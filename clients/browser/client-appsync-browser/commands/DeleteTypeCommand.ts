import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteType } from "../model/DeleteType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTypeInput } from "../types/DeleteTypeInput";
import { DeleteTypeOutput } from "../types/DeleteTypeOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/DeleteTypeInput";
export * from "../types/DeleteTypeOutput";
export * from "../types/DeleteTypeExceptionsUnion";

export class DeleteTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTypeInput,
      OutputTypesUnion,
      DeleteTypeOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTypeInput,
    DeleteTypeOutput,
    Blob
  >();

  constructor(readonly input: DeleteTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTypeInput, DeleteTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTypeInput, DeleteTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
