import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteFunction } from "../model/operations/DeleteFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFunctionInput } from "../types/DeleteFunctionInput";
import { DeleteFunctionOutput } from "../types/DeleteFunctionOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/DeleteFunctionInput";
export * from "../types/DeleteFunctionOutput";
export * from "../types/DeleteFunctionExceptionsUnion";

export class DeleteFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFunctionInput,
      OutputTypesUnion,
      DeleteFunctionOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFunctionInput,
    DeleteFunctionOutput,
    Blob
  >();

  constructor(readonly input: DeleteFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFunctionInput, DeleteFunctionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFunctionInput, DeleteFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
