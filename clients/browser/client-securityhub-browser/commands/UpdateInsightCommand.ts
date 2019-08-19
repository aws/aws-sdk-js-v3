import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateInsight } from "../model/operations/UpdateInsight";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateInsightInput } from "../types/UpdateInsightInput";
import { UpdateInsightOutput } from "../types/UpdateInsightOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/UpdateInsightInput";
export * from "../types/UpdateInsightOutput";
export * from "../types/UpdateInsightExceptionsUnion";

export class UpdateInsightCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateInsightInput,
      OutputTypesUnion,
      UpdateInsightOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateInsight;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateInsightInput,
    UpdateInsightOutput,
    Blob
  >();

  constructor(readonly input: UpdateInsightInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateInsightInput, UpdateInsightOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateInsightInput, UpdateInsightOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
