import { _ReservedCacheNode } from "./_ReservedCacheNode";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedCacheNodesOfferingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedCacheNode: {
      shape: _ReservedCacheNode
    }
  }
};
