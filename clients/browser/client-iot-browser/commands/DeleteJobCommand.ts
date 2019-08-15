import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteJob } from "../model/operations/DeleteJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteJobInput } from "../types/DeleteJobInput";
import { DeleteJobOutput } from "../types/DeleteJobOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteJobInput";
export * from "../types/DeleteJobOutput";
export * from "../types/DeleteJobExceptionsUnion";

export class DeleteJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteJobInput,
      OutputTypesUnion,
      DeleteJobOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteJobInput,
    DeleteJobOutput,
    Blob
  >();

  constructor(readonly input: DeleteJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteJobInput, DeleteJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteJobInput, DeleteJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
