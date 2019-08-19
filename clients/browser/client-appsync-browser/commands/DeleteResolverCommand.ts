import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteResolver } from "../model/operations/DeleteResolver";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResolverInput } from "../types/DeleteResolverInput";
import { DeleteResolverOutput } from "../types/DeleteResolverOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/DeleteResolverInput";
export * from "../types/DeleteResolverOutput";
export * from "../types/DeleteResolverExceptionsUnion";

export class DeleteResolverCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteResolverInput,
      OutputTypesUnion,
      DeleteResolverOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteResolver;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResolverInput,
    DeleteResolverOutput,
    Blob
  >();

  constructor(readonly input: DeleteResolverInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteResolverInput, DeleteResolverOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteResolverInput, DeleteResolverOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
