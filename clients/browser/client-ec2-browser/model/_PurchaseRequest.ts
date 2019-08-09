import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PurchaseRequest: _Structure_ = {
  type: "structure",
  required: ["InstanceCount", "PurchaseToken"],
  members: {
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    PurchaseToken: {
      shape: {
        type: "string"
      }
    }
  }
};
