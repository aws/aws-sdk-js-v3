import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAlias } from "../model/operations/DeleteAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAliasInput } from "../types/DeleteAliasInput";
import { DeleteAliasOutput } from "../types/DeleteAliasOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/DeleteAliasInput";
export * from "../types/DeleteAliasOutput";
export * from "../types/DeleteAliasExceptionsUnion";

export class DeleteAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAliasInput,
      OutputTypesUnion,
      DeleteAliasOutput,
      WorkMailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAliasInput,
    DeleteAliasOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAliasInput, DeleteAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAliasInput, DeleteAliasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
