import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteIntent } from "../model/DeleteIntent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIntentInput } from "../types/DeleteIntentInput";
import { DeleteIntentOutput } from "../types/DeleteIntentOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteIntentInput";
export * from "../types/DeleteIntentOutput";
export * from "../types/DeleteIntentExceptionsUnion";

export class DeleteIntentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIntentInput,
      OutputTypesUnion,
      DeleteIntentOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteIntent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIntentInput,
    DeleteIntentOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteIntentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteIntentInput, DeleteIntentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIntentInput, DeleteIntentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
