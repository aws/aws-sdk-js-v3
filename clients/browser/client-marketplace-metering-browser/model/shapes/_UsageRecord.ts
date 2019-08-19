import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UsageRecord: _Structure_ = {
  type: "structure",
  required: ["Timestamp", "CustomerIdentifier", "Dimension"],
  members: {
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    CustomerIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Dimension: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Quantity: {
      shape: {
        type: "integer"
      }
    }
  }
};
