import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateServer } from "../model/operations/CreateServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateServerInput } from "../types/CreateServerInput";
import { CreateServerOutput } from "../types/CreateServerOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/CreateServerInput";
export * from "../types/CreateServerOutput";
export * from "../types/CreateServerExceptionsUnion";

export class CreateServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateServerInput,
      OutputTypesUnion,
      CreateServerOutput,
      TransferResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateServerInput,
    CreateServerOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateServerInput, CreateServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateServerInput, CreateServerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
