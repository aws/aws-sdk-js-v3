import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DesiredWeightAndCapacity: _Structure_ = {
  type: "structure",
  required: ["VariantName"],
  members: {
    VariantName: {
      shape: {
        type: "string"
      }
    },
    DesiredWeight: {
      shape: {
        type: "float"
      }
    },
    DesiredInstanceCount: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
