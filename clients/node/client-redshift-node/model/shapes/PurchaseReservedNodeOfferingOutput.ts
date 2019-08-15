import { _ReservedNode } from "./_ReservedNode";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedNodeOfferingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedNode: {
      shape: _ReservedNode
    }
  }
};
