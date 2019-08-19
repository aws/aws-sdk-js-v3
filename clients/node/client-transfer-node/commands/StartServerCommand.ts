import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartServer } from "../model/operations/StartServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartServerInput } from "../types/StartServerInput";
import { StartServerOutput } from "../types/StartServerOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/StartServerInput";
export * from "../types/StartServerOutput";
export * from "../types/StartServerExceptionsUnion";

export class StartServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartServerInput,
      OutputTypesUnion,
      StartServerOutput,
      TransferResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartServerInput,
    StartServerOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<StartServerInput, StartServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartServerInput, StartServerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
