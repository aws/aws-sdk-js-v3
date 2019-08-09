import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAttributes } from "../model/DeleteAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAttributesInput } from "../types/DeleteAttributesInput";
import { DeleteAttributesOutput } from "../types/DeleteAttributesOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DeleteAttributesInput";
export * from "../types/DeleteAttributesOutput";
export * from "../types/DeleteAttributesExceptionsUnion";

export class DeleteAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAttributesInput,
      OutputTypesUnion,
      DeleteAttributesOutput,
      ECSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAttributesInput,
    DeleteAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAttributesInput, DeleteAttributesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAttributesInput, DeleteAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
