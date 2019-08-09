import { _RecurringChargeList } from "./_RecurringChargeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedCacheNodesOffering: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedCacheNodesOfferingId: {
      shape: {
        type: "string"
      }
    },
    CacheNodeType: {
      shape: {
        type: "string"
      }
    },
    Duration: {
      shape: {
        type: "integer"
      }
    },
    FixedPrice: {
      shape: {
        type: "float"
      }
    },
    UsagePrice: {
      shape: {
        type: "float"
      }
    },
    ProductDescription: {
      shape: {
        type: "string"
      }
    },
    OfferingType: {
      shape: {
        type: "string"
      }
    },
    RecurringCharges: {
      shape: _RecurringChargeList
    }
  }
};
