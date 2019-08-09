import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDeviceDefinition } from "../model/UpdateDeviceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDeviceDefinitionInput } from "../types/UpdateDeviceDefinitionInput";
import { UpdateDeviceDefinitionOutput } from "../types/UpdateDeviceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateDeviceDefinitionInput";
export * from "../types/UpdateDeviceDefinitionOutput";
export * from "../types/UpdateDeviceDefinitionExceptionsUnion";

export class UpdateDeviceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDeviceDefinitionInput,
      OutputTypesUnion,
      UpdateDeviceDefinitionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateDeviceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDeviceDefinitionInput,
    UpdateDeviceDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateDeviceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDeviceDefinitionInput,
    UpdateDeviceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDeviceDefinitionInput, UpdateDeviceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
