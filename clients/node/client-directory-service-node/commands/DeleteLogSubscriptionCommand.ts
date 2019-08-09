import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLogSubscription } from "../model/DeleteLogSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLogSubscriptionInput } from "../types/DeleteLogSubscriptionInput";
import { DeleteLogSubscriptionOutput } from "../types/DeleteLogSubscriptionOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DeleteLogSubscriptionInput";
export * from "../types/DeleteLogSubscriptionOutput";
export * from "../types/DeleteLogSubscriptionExceptionsUnion";

export class DeleteLogSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLogSubscriptionInput,
      OutputTypesUnion,
      DeleteLogSubscriptionOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLogSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLogSubscriptionInput,
    DeleteLogSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLogSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLogSubscriptionInput,
    DeleteLogSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLogSubscriptionInput, DeleteLogSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
