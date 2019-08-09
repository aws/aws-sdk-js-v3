import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetV2LoggingLevel } from "../model/SetV2LoggingLevel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetV2LoggingLevelInput } from "../types/SetV2LoggingLevelInput";
import { SetV2LoggingLevelOutput } from "../types/SetV2LoggingLevelOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/SetV2LoggingLevelInput";
export * from "../types/SetV2LoggingLevelOutput";
export * from "../types/SetV2LoggingLevelExceptionsUnion";

export class SetV2LoggingLevelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetV2LoggingLevelInput,
      OutputTypesUnion,
      SetV2LoggingLevelOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = SetV2LoggingLevel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetV2LoggingLevelInput,
    SetV2LoggingLevelOutput,
    Blob
  >();

  constructor(readonly input: SetV2LoggingLevelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<SetV2LoggingLevelInput, SetV2LoggingLevelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetV2LoggingLevelInput, SetV2LoggingLevelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
