import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteActivity } from "../model/operations/DeleteActivity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteActivityInput } from "../types/DeleteActivityInput";
import { DeleteActivityOutput } from "../types/DeleteActivityOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/DeleteActivityInput";
export * from "../types/DeleteActivityOutput";
export * from "../types/DeleteActivityExceptionsUnion";

export class DeleteActivityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteActivityInput,
      OutputTypesUnion,
      DeleteActivityOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteActivity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteActivityInput,
    DeleteActivityOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteActivityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteActivityInput, DeleteActivityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteActivityInput, DeleteActivityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
