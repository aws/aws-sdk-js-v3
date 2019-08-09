import { Structure as _Structure_ } from "@aws-sdk/types";

export const MeterUsageInput: _Structure_ = {
  type: "structure",
  required: ["ProductCode", "Timestamp", "UsageDimension"],
  members: {
    ProductCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    UsageDimension: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UsageQuantity: {
      shape: {
        type: "integer"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
