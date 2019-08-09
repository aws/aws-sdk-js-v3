import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPersonalizedRanking } from "../model/GetPersonalizedRanking";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPersonalizedRankingInput } from "../types/GetPersonalizedRankingInput";
import { GetPersonalizedRankingOutput } from "../types/GetPersonalizedRankingOutput";
import { PersonalizeRuntimeResolvedConfiguration } from "../PersonalizeRuntimeConfiguration";
export * from "../types/GetPersonalizedRankingInput";
export * from "../types/GetPersonalizedRankingOutput";
export * from "../types/GetPersonalizedRankingExceptionsUnion";

export class GetPersonalizedRankingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPersonalizedRankingInput,
      OutputTypesUnion,
      GetPersonalizedRankingOutput,
      PersonalizeRuntimeResolvedConfiguration,
      Blob
    > {
  readonly model = GetPersonalizedRanking;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPersonalizedRankingInput,
    GetPersonalizedRankingOutput,
    Blob
  >();

  constructor(readonly input: GetPersonalizedRankingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeRuntimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPersonalizedRankingInput,
    GetPersonalizedRankingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPersonalizedRankingInput, GetPersonalizedRankingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
