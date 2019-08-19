import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRun } from "../model/operations/DeleteRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRunInput } from "../types/DeleteRunInput";
import { DeleteRunOutput } from "../types/DeleteRunOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/DeleteRunInput";
export * from "../types/DeleteRunOutput";
export * from "../types/DeleteRunExceptionsUnion";

export class DeleteRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRunInput,
      OutputTypesUnion,
      DeleteRunOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRunInput,
    DeleteRunOutput,
    Blob
  >();

  constructor(readonly input: DeleteRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRunInput, DeleteRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRunInput, DeleteRunOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
