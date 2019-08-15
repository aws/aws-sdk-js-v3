import { _ReservedInstanceLimitPrice } from "./_ReservedInstanceLimitPrice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedInstancesOfferingInput: _Structure_ = {
  type: "structure",
  required: ["InstanceCount", "ReservedInstancesOfferingId"],
  members: {
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    ReservedInstancesOfferingId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    LimitPrice: {
      shape: _ReservedInstanceLimitPrice,
      locationName: "limitPrice"
    }
  }
};
