import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRecommendations } from "../model/operations/GetRecommendations";
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
      _stream.Readable
    > {
  readonly model = GetRecommendations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRecommendationsInput,
    GetRecommendationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRecommendationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
