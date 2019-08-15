import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUpload } from "../model/operations/UpdateUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUploadInput } from "../types/UpdateUploadInput";
import { UpdateUploadOutput } from "../types/UpdateUploadOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/UpdateUploadInput";
export * from "../types/UpdateUploadOutput";
export * from "../types/UpdateUploadExceptionsUnion";

export class UpdateUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUploadInput,
      OutputTypesUnion,
      UpdateUploadOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUploadInput,
    UpdateUploadOutput,
    Blob
  >();

  constructor(readonly input: UpdateUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateUploadInput, UpdateUploadOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUploadInput, UpdateUploadOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
