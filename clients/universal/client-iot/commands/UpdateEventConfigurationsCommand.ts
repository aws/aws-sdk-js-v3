import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEventConfigurations } from "../model/UpdateEventConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEventConfigurationsInput } from "../types/UpdateEventConfigurationsInput";
import { UpdateEventConfigurationsOutput } from "../types/UpdateEventConfigurationsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateEventConfigurationsInput";
export * from "../types/UpdateEventConfigurationsOutput";
export * from "../types/UpdateEventConfigurationsExceptionsUnion";

export class UpdateEventConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEventConfigurationsInput,
      OutputTypesUnion,
      UpdateEventConfigurationsOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateEventConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEventConfigurationsInput,
    UpdateEventConfigurationsOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateEventConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEventConfigurationsInput,
    UpdateEventConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateEventConfigurationsInput, UpdateEventConfigurationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
