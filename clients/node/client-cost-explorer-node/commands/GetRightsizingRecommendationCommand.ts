import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRightsizingRecommendation } from "../model/GetRightsizingRecommendation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRightsizingRecommendationInput } from "../types/GetRightsizingRecommendationInput";
import { GetRightsizingRecommendationOutput } from "../types/GetRightsizingRecommendationOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetRightsizingRecommendationInput";
export * from "../types/GetRightsizingRecommendationOutput";
export * from "../types/GetRightsizingRecommendationExceptionsUnion";

export class GetRightsizingRecommendationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRightsizingRecommendationInput,
      OutputTypesUnion,
      GetRightsizingRecommendationOutput,
      CostExplorerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRightsizingRecommendation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRightsizingRecommendationInput,
    GetRightsizingRecommendationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRightsizingRecommendationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRightsizingRecommendationInput,
    GetRightsizingRecommendationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRightsizingRecommendationInput,
        GetRightsizingRecommendationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
