import { List as _List_ } from "@aws-sdk/types";
import { _SpotPrice } from "./_SpotPrice";

export const _SpotPriceHistoryList: _List_ = {
  type: "list",
  member: {
    shape: _SpotPrice,
    locationName: "item"
  }
};
