import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartPersonTracking } from "../model/StartPersonTracking";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartPersonTrackingInput } from "../types/StartPersonTrackingInput";
import { StartPersonTrackingOutput } from "../types/StartPersonTrackingOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/StartPersonTrackingInput";
export * from "../types/StartPersonTrackingOutput";
export * from "../types/StartPersonTrackingExceptionsUnion";

export class StartPersonTrackingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartPersonTrackingInput,
      OutputTypesUnion,
      StartPersonTrackingOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartPersonTracking;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartPersonTrackingInput,
    StartPersonTrackingOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartPersonTrackingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartPersonTrackingInput,
    StartPersonTrackingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartPersonTrackingInput, StartPersonTrackingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
