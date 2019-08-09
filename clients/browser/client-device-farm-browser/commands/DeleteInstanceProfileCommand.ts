import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInstanceProfile } from "../model/DeleteInstanceProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInstanceProfileInput } from "../types/DeleteInstanceProfileInput";
import { DeleteInstanceProfileOutput } from "../types/DeleteInstanceProfileOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/DeleteInstanceProfileInput";
export * from "../types/DeleteInstanceProfileOutput";
export * from "../types/DeleteInstanceProfileExceptionsUnion";

export class DeleteInstanceProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInstanceProfileInput,
      OutputTypesUnion,
      DeleteInstanceProfileOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteInstanceProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInstanceProfileInput,
    DeleteInstanceProfileOutput,
    Blob
  >();

  constructor(readonly input: DeleteInstanceProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteInstanceProfileInput,
    DeleteInstanceProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInstanceProfileInput, DeleteInstanceProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
