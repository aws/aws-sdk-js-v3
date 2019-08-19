import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEventsConfiguration } from "../model/operations/GetEventsConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEventsConfigurationInput } from "../types/GetEventsConfigurationInput";
import { GetEventsConfigurationOutput } from "../types/GetEventsConfigurationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetEventsConfigurationInput";
export * from "../types/GetEventsConfigurationOutput";
export * from "../types/GetEventsConfigurationExceptionsUnion";

export class GetEventsConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEventsConfigurationInput,
      OutputTypesUnion,
      GetEventsConfigurationOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetEventsConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEventsConfigurationInput,
    GetEventsConfigurationOutput,
    Blob
  >();

  constructor(readonly input: GetEventsConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetEventsConfigurationInput,
    GetEventsConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEventsConfigurationInput, GetEventsConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
