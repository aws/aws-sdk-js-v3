import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTaskSet } from "../model/operations/DeleteTaskSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTaskSetInput } from "../types/DeleteTaskSetInput";
import { DeleteTaskSetOutput } from "../types/DeleteTaskSetOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DeleteTaskSetInput";
export * from "../types/DeleteTaskSetOutput";
export * from "../types/DeleteTaskSetExceptionsUnion";

export class DeleteTaskSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTaskSetInput,
      OutputTypesUnion,
      DeleteTaskSetOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTaskSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTaskSetInput,
    DeleteTaskSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTaskSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTaskSetInput, DeleteTaskSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTaskSetInput, DeleteTaskSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
