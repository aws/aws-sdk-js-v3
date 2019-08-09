import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFilter } from "../model/DeleteFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFilterInput } from "../types/DeleteFilterInput";
import { DeleteFilterOutput } from "../types/DeleteFilterOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/DeleteFilterInput";
export * from "../types/DeleteFilterOutput";
export * from "../types/DeleteFilterExceptionsUnion";

export class DeleteFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFilterInput,
      OutputTypesUnion,
      DeleteFilterOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFilterInput,
    DeleteFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFilterInput, DeleteFilterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFilterInput, DeleteFilterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
