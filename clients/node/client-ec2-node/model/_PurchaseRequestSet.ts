import { List as _List_ } from "@aws-sdk/types";
import { _PurchaseRequest } from "./_PurchaseRequest";

export const _PurchaseRequestSet: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _PurchaseRequest,
    locationName: "PurchaseRequest"
  }
};
