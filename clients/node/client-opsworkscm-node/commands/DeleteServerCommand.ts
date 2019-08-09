import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteServer } from "../model/DeleteServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServerInput } from "../types/DeleteServerInput";
import { DeleteServerOutput } from "../types/DeleteServerOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/DeleteServerInput";
export * from "../types/DeleteServerOutput";
export * from "../types/DeleteServerExceptionsUnion";

export class DeleteServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServerInput,
      OutputTypesUnion,
      DeleteServerOutput,
      OpsWorksCMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServerInput,
    DeleteServerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteServerInput, DeleteServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteServerInput, DeleteServerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
