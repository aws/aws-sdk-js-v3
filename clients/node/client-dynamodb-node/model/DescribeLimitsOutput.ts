import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLimitsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountMaxReadCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AccountMaxWriteCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    TableMaxReadCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    TableMaxWriteCapacityUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
