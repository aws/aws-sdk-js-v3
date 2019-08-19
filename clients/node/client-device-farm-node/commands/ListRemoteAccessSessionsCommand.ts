import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRemoteAccessSessions } from "../model/operations/ListRemoteAccessSessions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRemoteAccessSessionsInput } from "../types/ListRemoteAccessSessionsInput";
import { ListRemoteAccessSessionsOutput } from "../types/ListRemoteAccessSessionsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListRemoteAccessSessionsInput";
export * from "../types/ListRemoteAccessSessionsOutput";
export * from "../types/ListRemoteAccessSessionsExceptionsUnion";

export class ListRemoteAccessSessionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRemoteAccessSessionsInput,
      OutputTypesUnion,
      ListRemoteAccessSessionsOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRemoteAccessSessions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRemoteAccessSessionsInput,
    ListRemoteAccessSessionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRemoteAccessSessionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRemoteAccessSessionsInput,
    ListRemoteAccessSessionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRemoteAccessSessionsInput, ListRemoteAccessSessionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
