import { List as _List_ } from "@aws-sdk/types";
import { _ReservationPurchaseRecommendationDetail } from "./_ReservationPurchaseRecommendationDetail";

export const _ReservationPurchaseRecommendationDetails: _List_ = {
  type: "list",
  member: {
    shape: _ReservationPurchaseRecommendationDetail
  }
};
