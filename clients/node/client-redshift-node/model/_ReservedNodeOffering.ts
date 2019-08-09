import { _RecurringChargeList } from "./_RecurringChargeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedNodeOffering: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedNodeOfferingId: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
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
    CurrencyCode: {
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
    },
    ReservedNodeOfferingType: {
      shape: {
        type: "string"
      }
    }
  }
};
