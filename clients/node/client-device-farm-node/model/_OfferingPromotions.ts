import { List as _List_ } from "@aws-sdk/types";
import { _OfferingPromotion } from "./_OfferingPromotion";

export const _OfferingPromotions: _List_ = {
  type: "list",
  member: {
    shape: _OfferingPromotion
  }
};
