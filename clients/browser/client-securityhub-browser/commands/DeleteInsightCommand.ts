import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInsight } from "../model/DeleteInsight";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInsightInput } from "../types/DeleteInsightInput";
import { DeleteInsightOutput } from "../types/DeleteInsightOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DeleteInsightInput";
export * from "../types/DeleteInsightOutput";
export * from "../types/DeleteInsightExceptionsUnion";

export class DeleteInsightCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInsightInput,
      OutputTypesUnion,
      DeleteInsightOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteInsight;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInsightInput,
    DeleteInsightOutput,
    Blob
  >();

  constructor(readonly input: DeleteInsightInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteInsightInput, DeleteInsightOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInsightInput, DeleteInsightOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
