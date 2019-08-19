import { Map as _Map_ } from "@aws-sdk/types";
import { _FailedItemDetails } from "./_FailedItemDetails";

export const _FailedItems: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _FailedItemDetails
  }
};
