import { List as _List_ } from "@aws-sdk/types";
import { _Purchase } from "./_Purchase";

export const _PurchaseSet: _List_ = {
  type: "list",
  member: {
    shape: _Purchase,
    locationName: "item"
  }
};
