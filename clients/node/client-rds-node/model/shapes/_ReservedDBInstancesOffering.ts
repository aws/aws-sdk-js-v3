import { _RecurringChargeList } from "./_RecurringChargeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedDBInstancesOffering: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedDBInstancesOfferingId: {
      shape: {
        type: "string"
      }
    },
    DBInstanceClass: {
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
    MultiAZ: {
      shape: {
        type: "boolean"
      }
    },
    RecurringCharges: {
      shape: _RecurringChargeList
    }
  }
};
