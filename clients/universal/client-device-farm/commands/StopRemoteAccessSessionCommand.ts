import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopRemoteAccessSession } from "../model/StopRemoteAccessSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopRemoteAccessSessionInput } from "../types/StopRemoteAccessSessionInput";
import { StopRemoteAccessSessionOutput } from "../types/StopRemoteAccessSessionOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/StopRemoteAccessSessionInput";
export * from "../types/StopRemoteAccessSessionOutput";
export * from "../types/StopRemoteAccessSessionExceptionsUnion";

export class StopRemoteAccessSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopRemoteAccessSessionInput,
      OutputTypesUnion,
      StopRemoteAccessSessionOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopRemoteAccessSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopRemoteAccessSessionInput,
    StopRemoteAccessSessionOutput,
    Uint8Array
  >();

  constructor(readonly input: StopRemoteAccessSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopRemoteAccessSessionInput,
    StopRemoteAccessSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopRemoteAccessSessionInput, StopRemoteAccessSessionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
