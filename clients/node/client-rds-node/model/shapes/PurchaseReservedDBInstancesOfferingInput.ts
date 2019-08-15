import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedDBInstancesOfferingInput: _Structure_ = {
  type: "structure",
  required: ["ReservedDBInstancesOfferingId"],
  members: {
    ReservedDBInstancesOfferingId: {
      shape: {
        type: "string"
      }
    },
    ReservedDBInstanceId: {
      shape: {
        type: "string"
      }
    },
    DBInstanceCount: {
      shape: {
        type: "integer"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
