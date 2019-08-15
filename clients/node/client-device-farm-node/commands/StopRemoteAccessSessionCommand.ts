import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopRemoteAccessSession } from "../model/operations/StopRemoteAccessSession";
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
      _stream.Readable
    > {
  readonly model = StopRemoteAccessSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopRemoteAccessSessionInput,
    StopRemoteAccessSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopRemoteAccessSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
