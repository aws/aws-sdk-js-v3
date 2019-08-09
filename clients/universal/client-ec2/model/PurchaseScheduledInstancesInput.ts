import { _PurchaseRequestSet } from "./_PurchaseRequestSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseScheduledInstancesInput: _Structure_ = {
  type: "structure",
  required: ["PurchaseRequests"],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    PurchaseRequests: {
      shape: _PurchaseRequestSet,
      locationName: "PurchaseRequest"
    }
  }
};
