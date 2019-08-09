import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartTrigger } from "../model/StartTrigger";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartTriggerInput } from "../types/StartTriggerInput";
import { StartTriggerOutput } from "../types/StartTriggerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/StartTriggerInput";
export * from "../types/StartTriggerOutput";
export * from "../types/StartTriggerExceptionsUnion";

export class StartTriggerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartTriggerInput,
      OutputTypesUnion,
      StartTriggerOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartTrigger;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartTriggerInput,
    StartTriggerOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartTriggerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<StartTriggerInput, StartTriggerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartTriggerInput, StartTriggerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
