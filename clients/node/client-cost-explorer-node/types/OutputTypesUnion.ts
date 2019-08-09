import { GetCostAndUsageOutput } from "./GetCostAndUsageOutput";
import { GetCostForecastOutput } from "./GetCostForecastOutput";
import { GetDimensionValuesOutput } from "./GetDimensionValuesOutput";
import { GetReservationCoverageOutput } from "./GetReservationCoverageOutput";
import { GetReservationPurchaseRecommendationOutput } from "./GetReservationPurchaseRecommendationOutput";
import { GetReservationUtilizationOutput } from "./GetReservationUtilizationOutput";
import { GetRightsizingRecommendationOutput } from "./GetRightsizingRecommendationOutput";
import { GetTagsOutput } from "./GetTagsOutput";
import { GetUsageForecastOutput } from "./GetUsageForecastOutput";
export type OutputTypesUnion =
  | GetCostAndUsageOutput
  | GetCostForecastOutput
  | GetDimensionValuesOutput
  | GetReservationCoverageOutput
  | GetReservationPurchaseRecommendationOutput
  | GetReservationUtilizationOutput
  | GetRightsizingRecommendationOutput
  | GetTagsOutput
  | GetUsageForecastOutput;
