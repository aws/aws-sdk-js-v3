import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteUtterances } from "../model/operations/DeleteUtterances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUtterancesInput } from "../types/DeleteUtterancesInput";
import { DeleteUtterancesOutput } from "../types/DeleteUtterancesOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteUtterancesInput";
export * from "../types/DeleteUtterancesOutput";
export * from "../types/DeleteUtterancesExceptionsUnion";

export class DeleteUtterancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUtterancesInput,
      OutputTypesUnion,
      DeleteUtterancesOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteUtterances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUtterancesInput,
    DeleteUtterancesOutput,
    Blob
  >();

  constructor(readonly input: DeleteUtterancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteUtterancesInput, DeleteUtterancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUtterancesInput, DeleteUtterancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
