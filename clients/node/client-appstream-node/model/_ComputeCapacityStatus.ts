import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComputeCapacityStatus: _Structure_ = {
  type: "structure",
  required: ["Desired"],
  members: {
    Desired: {
      shape: {
        type: "integer"
      }
    },
    Running: {
      shape: {
        type: "integer"
      }
    },
    InUse: {
      shape: {
        type: "integer"
      }
    },
    Available: {
      shape: {
        type: "integer"
      }
    }
  }
};
