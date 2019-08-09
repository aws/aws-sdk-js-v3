import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDeviceDefinition } from "../model/CreateDeviceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeviceDefinitionInput } from "../types/CreateDeviceDefinitionInput";
import { CreateDeviceDefinitionOutput } from "../types/CreateDeviceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateDeviceDefinitionInput";
export * from "../types/CreateDeviceDefinitionOutput";
export * from "../types/CreateDeviceDefinitionExceptionsUnion";

export class CreateDeviceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeviceDefinitionInput,
      OutputTypesUnion,
      CreateDeviceDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDeviceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeviceDefinitionInput,
    CreateDeviceDefinitionOutput,
    Blob
  >();

  constructor(readonly input: CreateDeviceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDeviceDefinitionInput,
    CreateDeviceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDeviceDefinitionInput, CreateDeviceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
