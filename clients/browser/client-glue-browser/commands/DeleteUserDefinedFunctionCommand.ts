import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteUserDefinedFunction } from "../model/operations/DeleteUserDefinedFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserDefinedFunctionInput } from "../types/DeleteUserDefinedFunctionInput";
import { DeleteUserDefinedFunctionOutput } from "../types/DeleteUserDefinedFunctionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteUserDefinedFunctionInput";
export * from "../types/DeleteUserDefinedFunctionOutput";
export * from "../types/DeleteUserDefinedFunctionExceptionsUnion";

export class DeleteUserDefinedFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserDefinedFunctionInput,
      OutputTypesUnion,
      DeleteUserDefinedFunctionOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteUserDefinedFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserDefinedFunctionInput,
    DeleteUserDefinedFunctionOutput,
    Blob
  >();

  constructor(readonly input: DeleteUserDefinedFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteUserDefinedFunctionInput,
    DeleteUserDefinedFunctionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUserDefinedFunctionInput, DeleteUserDefinedFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
