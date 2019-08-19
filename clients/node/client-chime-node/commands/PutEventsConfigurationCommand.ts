import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutEventsConfiguration } from "../model/operations/PutEventsConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEventsConfigurationInput } from "../types/PutEventsConfigurationInput";
import { PutEventsConfigurationOutput } from "../types/PutEventsConfigurationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/PutEventsConfigurationInput";
export * from "../types/PutEventsConfigurationOutput";
export * from "../types/PutEventsConfigurationExceptionsUnion";

export class PutEventsConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEventsConfigurationInput,
      OutputTypesUnion,
      PutEventsConfigurationOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutEventsConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEventsConfigurationInput,
    PutEventsConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutEventsConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutEventsConfigurationInput,
    PutEventsConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutEventsConfigurationInput, PutEventsConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
