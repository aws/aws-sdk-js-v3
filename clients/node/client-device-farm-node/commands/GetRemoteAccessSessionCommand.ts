import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRemoteAccessSession } from "../model/operations/GetRemoteAccessSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRemoteAccessSessionInput } from "../types/GetRemoteAccessSessionInput";
import { GetRemoteAccessSessionOutput } from "../types/GetRemoteAccessSessionOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetRemoteAccessSessionInput";
export * from "../types/GetRemoteAccessSessionOutput";
export * from "../types/GetRemoteAccessSessionExceptionsUnion";

export class GetRemoteAccessSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRemoteAccessSessionInput,
      OutputTypesUnion,
      GetRemoteAccessSessionOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRemoteAccessSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRemoteAccessSessionInput,
    GetRemoteAccessSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRemoteAccessSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRemoteAccessSessionInput,
    GetRemoteAccessSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRemoteAccessSessionInput, GetRemoteAccessSessionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
