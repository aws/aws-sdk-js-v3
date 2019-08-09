import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUserDefinedFunction } from "../model/CreateUserDefinedFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUserDefinedFunctionInput } from "../types/CreateUserDefinedFunctionInput";
import { CreateUserDefinedFunctionOutput } from "../types/CreateUserDefinedFunctionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateUserDefinedFunctionInput";
export * from "../types/CreateUserDefinedFunctionOutput";
export * from "../types/CreateUserDefinedFunctionExceptionsUnion";

export class CreateUserDefinedFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUserDefinedFunctionInput,
      OutputTypesUnion,
      CreateUserDefinedFunctionOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = CreateUserDefinedFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUserDefinedFunctionInput,
    CreateUserDefinedFunctionOutput,
    Blob
  >();

  constructor(readonly input: CreateUserDefinedFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateUserDefinedFunctionInput,
    CreateUserDefinedFunctionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateUserDefinedFunctionInput, CreateUserDefinedFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
