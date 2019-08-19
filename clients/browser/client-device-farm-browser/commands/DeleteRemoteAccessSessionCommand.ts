import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRemoteAccessSession } from "../model/operations/DeleteRemoteAccessSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRemoteAccessSessionInput } from "../types/DeleteRemoteAccessSessionInput";
import { DeleteRemoteAccessSessionOutput } from "../types/DeleteRemoteAccessSessionOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/DeleteRemoteAccessSessionInput";
export * from "../types/DeleteRemoteAccessSessionOutput";
export * from "../types/DeleteRemoteAccessSessionExceptionsUnion";

export class DeleteRemoteAccessSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRemoteAccessSessionInput,
      OutputTypesUnion,
      DeleteRemoteAccessSessionOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRemoteAccessSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRemoteAccessSessionInput,
    DeleteRemoteAccessSessionOutput,
    Blob
  >();

  constructor(readonly input: DeleteRemoteAccessSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRemoteAccessSessionInput,
    DeleteRemoteAccessSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRemoteAccessSessionInput, DeleteRemoteAccessSessionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
