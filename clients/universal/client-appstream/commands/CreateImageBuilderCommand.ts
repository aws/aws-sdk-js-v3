import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateImageBuilder } from "../model/CreateImageBuilder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateImageBuilderInput } from "../types/CreateImageBuilderInput";
import { CreateImageBuilderOutput } from "../types/CreateImageBuilderOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/CreateImageBuilderInput";
export * from "../types/CreateImageBuilderOutput";
export * from "../types/CreateImageBuilderExceptionsUnion";

export class CreateImageBuilderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateImageBuilderInput,
      OutputTypesUnion,
      CreateImageBuilderOutput,
      AppStreamResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateImageBuilder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateImageBuilderInput,
    CreateImageBuilderOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateImageBuilderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateImageBuilderInput,
    CreateImageBuilderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateImageBuilderInput, CreateImageBuilderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
