import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateResourceDefinition } from "../model/UpdateResourceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateResourceDefinitionInput } from "../types/UpdateResourceDefinitionInput";
import { UpdateResourceDefinitionOutput } from "../types/UpdateResourceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateResourceDefinitionInput";
export * from "../types/UpdateResourceDefinitionOutput";
export * from "../types/UpdateResourceDefinitionExceptionsUnion";

export class UpdateResourceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateResourceDefinitionInput,
      OutputTypesUnion,
      UpdateResourceDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateResourceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateResourceDefinitionInput,
    UpdateResourceDefinitionOutput,
    Blob
  >();

  constructor(readonly input: UpdateResourceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateResourceDefinitionInput,
    UpdateResourceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateResourceDefinitionInput, UpdateResourceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
