import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUserDefinedFunction } from "../model/UpdateUserDefinedFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserDefinedFunctionInput } from "../types/UpdateUserDefinedFunctionInput";
import { UpdateUserDefinedFunctionOutput } from "../types/UpdateUserDefinedFunctionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdateUserDefinedFunctionInput";
export * from "../types/UpdateUserDefinedFunctionOutput";
export * from "../types/UpdateUserDefinedFunctionExceptionsUnion";

export class UpdateUserDefinedFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserDefinedFunctionInput,
      OutputTypesUnion,
      UpdateUserDefinedFunctionOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUserDefinedFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserDefinedFunctionInput,
    UpdateUserDefinedFunctionOutput,
    Blob
  >();

  constructor(readonly input: UpdateUserDefinedFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserDefinedFunctionInput,
    UpdateUserDefinedFunctionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserDefinedFunctionInput, UpdateUserDefinedFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
