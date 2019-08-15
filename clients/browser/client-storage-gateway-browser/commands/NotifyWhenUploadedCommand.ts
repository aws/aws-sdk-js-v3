import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { NotifyWhenUploaded } from "../model/operations/NotifyWhenUploaded";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { NotifyWhenUploadedInput } from "../types/NotifyWhenUploadedInput";
import { NotifyWhenUploadedOutput } from "../types/NotifyWhenUploadedOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/NotifyWhenUploadedInput";
export * from "../types/NotifyWhenUploadedOutput";
export * from "../types/NotifyWhenUploadedExceptionsUnion";

export class NotifyWhenUploadedCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      NotifyWhenUploadedInput,
      OutputTypesUnion,
      NotifyWhenUploadedOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = NotifyWhenUploaded;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    NotifyWhenUploadedInput,
    NotifyWhenUploadedOutput,
    Blob
  >();

  constructor(readonly input: NotifyWhenUploadedInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    NotifyWhenUploadedInput,
    NotifyWhenUploadedOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<NotifyWhenUploadedInput, NotifyWhenUploadedOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
