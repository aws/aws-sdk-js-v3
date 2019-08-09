import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUpload } from "../model/CreateUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUploadInput } from "../types/CreateUploadInput";
import { CreateUploadOutput } from "../types/CreateUploadOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/CreateUploadInput";
export * from "../types/CreateUploadOutput";
export * from "../types/CreateUploadExceptionsUnion";

export class CreateUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUploadInput,
      OutputTypesUnion,
      CreateUploadOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = CreateUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUploadInput,
    CreateUploadOutput,
    Blob
  >();

  constructor(readonly input: CreateUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateUploadInput, CreateUploadOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateUploadInput, CreateUploadOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
