import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCoreDefinition } from "../model/CreateCoreDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCoreDefinitionInput } from "../types/CreateCoreDefinitionInput";
import { CreateCoreDefinitionOutput } from "../types/CreateCoreDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateCoreDefinitionInput";
export * from "../types/CreateCoreDefinitionOutput";
export * from "../types/CreateCoreDefinitionExceptionsUnion";

export class CreateCoreDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCoreDefinitionInput,
      OutputTypesUnion,
      CreateCoreDefinitionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateCoreDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCoreDefinitionInput,
    CreateCoreDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateCoreDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCoreDefinitionInput,
    CreateCoreDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCoreDefinitionInput, CreateCoreDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
