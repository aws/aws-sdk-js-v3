import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteActivation } from "../model/DeleteActivation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteActivationInput } from "../types/DeleteActivationInput";
import { DeleteActivationOutput } from "../types/DeleteActivationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeleteActivationInput";
export * from "../types/DeleteActivationOutput";
export * from "../types/DeleteActivationExceptionsUnion";

export class DeleteActivationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteActivationInput,
      OutputTypesUnion,
      DeleteActivationOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteActivation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteActivationInput,
    DeleteActivationOutput,
    Blob
  >();

  constructor(readonly input: DeleteActivationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteActivationInput, DeleteActivationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteActivationInput, DeleteActivationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
