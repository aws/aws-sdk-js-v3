import { List as _List_ } from "@aws-sdk/types";
import { _RightsizingRecommendation } from "./_RightsizingRecommendation";

export const _RightsizingRecommendationList: _List_ = {
  type: "list",
  member: {
    shape: _RightsizingRecommendation
  }
};
