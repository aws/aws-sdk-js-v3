import { List as _List_ } from "@aws-sdk/types";
import { _PredictedItem } from "./_PredictedItem";

export const _ItemList: _List_ = {
  type: "list",
  member: {
    shape: _PredictedItem
  }
};
