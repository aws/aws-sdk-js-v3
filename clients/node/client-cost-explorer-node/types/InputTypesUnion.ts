import { GetCostAndUsageInput } from "./GetCostAndUsageInput";
import { GetCostForecastInput } from "./GetCostForecastInput";
import { GetDimensionValuesInput } from "./GetDimensionValuesInput";
import { GetReservationCoverageInput } from "./GetReservationCoverageInput";
import { GetReservationPurchaseRecommendationInput } from "./GetReservationPurchaseRecommendationInput";
import { GetReservationUtilizationInput } from "./GetReservationUtilizationInput";
import { GetRightsizingRecommendationInput } from "./GetRightsizingRecommendationInput";
import { GetTagsInput } from "./GetTagsInput";
import { GetUsageForecastInput } from "./GetUsageForecastInput";
export type InputTypesUnion =
  | GetCostAndUsageInput
  | GetCostForecastInput
  | GetDimensionValuesInput
  | GetReservationCoverageInput
  | GetReservationPurchaseRecommendationInput
  | GetReservationUtilizationInput
  | GetRightsizingRecommendationInput
  | GetTagsInput
  | GetUsageForecastInput;
