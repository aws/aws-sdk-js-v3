import { _RecurringChargeList } from "./_RecurringChargeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedDBInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedDBInstanceId: {
      shape: {
        type: "string"
      }
    },
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
    StartTime: {
      shape: {
        type: "timestamp"
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
    DBInstanceCount: {
      shape: {
        type: "integer"
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
    State: {
      shape: {
        type: "string"
      }
    },
    RecurringCharges: {
      shape: _RecurringChargeList
    },
    ReservedDBInstanceArn: {
      shape: {
        type: "string"
      }
    }
  }
};
