import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteUpload } from "../model/operations/DeleteUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUploadInput } from "../types/DeleteUploadInput";
import { DeleteUploadOutput } from "../types/DeleteUploadOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/DeleteUploadInput";
export * from "../types/DeleteUploadOutput";
export * from "../types/DeleteUploadExceptionsUnion";

export class DeleteUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUploadInput,
      OutputTypesUnion,
      DeleteUploadOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUploadInput,
    DeleteUploadOutput,
    Blob
  >();

  constructor(readonly input: DeleteUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteUploadInput, DeleteUploadOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUploadInput, DeleteUploadOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
