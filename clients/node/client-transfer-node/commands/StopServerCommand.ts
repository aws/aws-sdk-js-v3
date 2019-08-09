import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopServer } from "../model/StopServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopServerInput } from "../types/StopServerInput";
import { StopServerOutput } from "../types/StopServerOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/StopServerInput";
export * from "../types/StopServerOutput";
export * from "../types/StopServerExceptionsUnion";

export class StopServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopServerInput,
      OutputTypesUnion,
      StopServerOutput,
      TransferResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopServerInput,
    StopServerOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<StopServerInput, StopServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopServerInput, StopServerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
