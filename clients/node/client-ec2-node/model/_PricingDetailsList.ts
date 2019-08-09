import { List as _List_ } from "@aws-sdk/types";
import { _PricingDetail } from "./_PricingDetail";

export const _PricingDetailsList: _List_ = {
  type: "list",
  member: {
    shape: _PricingDetail,
    locationName: "item"
  }
};
