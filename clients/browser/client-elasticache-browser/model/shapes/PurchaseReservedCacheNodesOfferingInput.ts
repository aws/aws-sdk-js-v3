import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedCacheNodesOfferingInput: _Structure_ = {
  type: "structure",
  required: ["ReservedCacheNodesOfferingId"],
  members: {
    ReservedCacheNodesOfferingId: {
      shape: {
        type: "string"
      }
    },
    ReservedCacheNodeId: {
      shape: {
        type: "string"
      }
    },
    CacheNodeCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
