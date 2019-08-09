import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AllocateConnectionOnInterconnect } from "../model/AllocateConnectionOnInterconnect";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AllocateConnectionOnInterconnectInput } from "../types/AllocateConnectionOnInterconnectInput";
import { AllocateConnectionOnInterconnectOutput } from "../types/AllocateConnectionOnInterconnectOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AllocateConnectionOnInterconnectInput";
export * from "../types/AllocateConnectionOnInterconnectOutput";
export * from "../types/AllocateConnectionOnInterconnectExceptionsUnion";

export class AllocateConnectionOnInterconnectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AllocateConnectionOnInterconnectInput,
      OutputTypesUnion,
      AllocateConnectionOnInterconnectOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AllocateConnectionOnInterconnect;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AllocateConnectionOnInterconnectInput,
    AllocateConnectionOnInterconnectOutput,
    _stream.Readable
  >();

  constructor(readonly input: AllocateConnectionOnInterconnectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AllocateConnectionOnInterconnectInput,
    AllocateConnectionOnInterconnectOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AllocateConnectionOnInterconnectInput,
        AllocateConnectionOnInterconnectOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
