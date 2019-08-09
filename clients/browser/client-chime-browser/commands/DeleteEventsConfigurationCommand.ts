import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEventsConfiguration } from "../model/DeleteEventsConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEventsConfigurationInput } from "../types/DeleteEventsConfigurationInput";
import { DeleteEventsConfigurationOutput } from "../types/DeleteEventsConfigurationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DeleteEventsConfigurationInput";
export * from "../types/DeleteEventsConfigurationOutput";
export * from "../types/DeleteEventsConfigurationExceptionsUnion";

export class DeleteEventsConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEventsConfigurationInput,
      OutputTypesUnion,
      DeleteEventsConfigurationOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteEventsConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEventsConfigurationInput,
    DeleteEventsConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DeleteEventsConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEventsConfigurationInput,
    DeleteEventsConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEventsConfigurationInput, DeleteEventsConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
