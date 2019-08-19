import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFunction } from "../model/operations/UpdateFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFunctionInput } from "../types/UpdateFunctionInput";
import { UpdateFunctionOutput } from "../types/UpdateFunctionOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/UpdateFunctionInput";
export * from "../types/UpdateFunctionOutput";
export * from "../types/UpdateFunctionExceptionsUnion";

export class UpdateFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFunctionInput,
      OutputTypesUnion,
      UpdateFunctionOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFunctionInput,
    UpdateFunctionOutput,
    Blob
  >();

  constructor(readonly input: UpdateFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFunctionInput, UpdateFunctionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFunctionInput, UpdateFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
