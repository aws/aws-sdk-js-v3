import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRecommendations } from "../model/GetRecommendations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRecommendationsInput } from "../types/GetRecommendationsInput";
import { GetRecommendationsOutput } from "../types/GetRecommendationsOutput";
import { PersonalizeRuntimeResolvedConfiguration } from "../PersonalizeRuntimeConfiguration";
export * from "../types/GetRecommendationsInput";
export * from "../types/GetRecommendationsOutput";
export * from "../types/GetRecommendationsExceptionsUnion";

export class GetRecommendationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRecommendationsInput,
      OutputTypesUnion,
      GetRecommendationsOutput,
      PersonalizeRuntimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetRecommendations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRecommendationsInput,
    GetRecommendationsOutput,
    Blob
  >();

  constructor(readonly input: GetRecommendationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeRuntimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRecommendationsInput,
    GetRecommendationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRecommendationsInput, GetRecommendationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
