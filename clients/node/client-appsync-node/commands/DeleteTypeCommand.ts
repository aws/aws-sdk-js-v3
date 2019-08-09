import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteType } from "../model/DeleteType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTypeInput } from "../types/DeleteTypeInput";
import { DeleteTypeOutput } from "../types/DeleteTypeOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/DeleteTypeInput";
export * from "../types/DeleteTypeOutput";
export * from "../types/DeleteTypeExceptionsUnion";

export class DeleteTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTypeInput,
      OutputTypesUnion,
      DeleteTypeOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTypeInput,
    DeleteTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTypeInput, DeleteTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTypeInput, DeleteTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
