import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteClassifier } from "../model/DeleteClassifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClassifierInput } from "../types/DeleteClassifierInput";
import { DeleteClassifierOutput } from "../types/DeleteClassifierOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteClassifierInput";
export * from "../types/DeleteClassifierOutput";
export * from "../types/DeleteClassifierExceptionsUnion";

export class DeleteClassifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClassifierInput,
      OutputTypesUnion,
      DeleteClassifierOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteClassifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClassifierInput,
    DeleteClassifierOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteClassifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteClassifierInput, DeleteClassifierOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteClassifierInput, DeleteClassifierOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
