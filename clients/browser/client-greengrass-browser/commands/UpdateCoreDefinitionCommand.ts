import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCoreDefinition } from "../model/operations/UpdateCoreDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCoreDefinitionInput } from "../types/UpdateCoreDefinitionInput";
import { UpdateCoreDefinitionOutput } from "../types/UpdateCoreDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateCoreDefinitionInput";
export * from "../types/UpdateCoreDefinitionOutput";
export * from "../types/UpdateCoreDefinitionExceptionsUnion";

export class UpdateCoreDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCoreDefinitionInput,
      OutputTypesUnion,
      UpdateCoreDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateCoreDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCoreDefinitionInput,
    UpdateCoreDefinitionOutput,
    Blob
  >();

  constructor(readonly input: UpdateCoreDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCoreDefinitionInput,
    UpdateCoreDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCoreDefinitionInput, UpdateCoreDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
