import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetReservationPurchaseRecommendation } from "../model/GetReservationPurchaseRecommendation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReservationPurchaseRecommendationInput } from "../types/GetReservationPurchaseRecommendationInput";
import { GetReservationPurchaseRecommendationOutput } from "../types/GetReservationPurchaseRecommendationOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetReservationPurchaseRecommendationInput";
export * from "../types/GetReservationPurchaseRecommendationOutput";
export * from "../types/GetReservationPurchaseRecommendationExceptionsUnion";

export class GetReservationPurchaseRecommendationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReservationPurchaseRecommendationInput,
      OutputTypesUnion,
      GetReservationPurchaseRecommendationOutput,
      CostExplorerResolvedConfiguration,
      Blob
    > {
  readonly model = GetReservationPurchaseRecommendation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReservationPurchaseRecommendationInput,
    GetReservationPurchaseRecommendationOutput,
    Blob
  >();

  constructor(readonly input: GetReservationPurchaseRecommendationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReservationPurchaseRecommendationInput,
    GetReservationPurchaseRecommendationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetReservationPurchaseRecommendationInput,
        GetReservationPurchaseRecommendationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
