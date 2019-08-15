import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateJobPriority } from "../model/operations/UpdateJobPriority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateJobPriorityInput } from "../types/UpdateJobPriorityInput";
import { UpdateJobPriorityOutput } from "../types/UpdateJobPriorityOutput";
import { S3ControlResolvedConfiguration } from "../S3ControlConfiguration";
export * from "../types/UpdateJobPriorityInput";
export * from "../types/UpdateJobPriorityOutput";
export * from "../types/UpdateJobPriorityExceptionsUnion";

export class UpdateJobPriorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateJobPriorityInput,
      OutputTypesUnion,
      UpdateJobPriorityOutput,
      S3ControlResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateJobPriority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateJobPriorityInput,
    UpdateJobPriorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateJobPriorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ControlResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateJobPriorityInput, UpdateJobPriorityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateJobPriorityInput, UpdateJobPriorityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
