import { List as _List_ } from "@aws-sdk/types";
import { _ReservationPurchaseRecommendation } from "./_ReservationPurchaseRecommendation";

export const _ReservationPurchaseRecommendations: _List_ = {
  type: "list",
  member: {
    shape: _ReservationPurchaseRecommendation
  }
};
