import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDeviceDefinition } from "../model/DeleteDeviceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeviceDefinitionInput } from "../types/DeleteDeviceDefinitionInput";
import { DeleteDeviceDefinitionOutput } from "../types/DeleteDeviceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DeleteDeviceDefinitionInput";
export * from "../types/DeleteDeviceDefinitionOutput";
export * from "../types/DeleteDeviceDefinitionExceptionsUnion";

export class DeleteDeviceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeviceDefinitionInput,
      OutputTypesUnion,
      DeleteDeviceDefinitionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDeviceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeviceDefinitionInput,
    DeleteDeviceDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDeviceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDeviceDefinitionInput,
    DeleteDeviceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeviceDefinitionInput, DeleteDeviceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
