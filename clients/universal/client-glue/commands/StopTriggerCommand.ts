import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopTrigger } from "../model/StopTrigger";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopTriggerInput } from "../types/StopTriggerInput";
import { StopTriggerOutput } from "../types/StopTriggerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/StopTriggerInput";
export * from "../types/StopTriggerOutput";
export * from "../types/StopTriggerExceptionsUnion";

export class StopTriggerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopTriggerInput,
      OutputTypesUnion,
      StopTriggerOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopTrigger;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopTriggerInput,
    StopTriggerOutput,
    Uint8Array
  >();

  constructor(readonly input: StopTriggerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<StopTriggerInput, StopTriggerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopTriggerInput, StopTriggerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
