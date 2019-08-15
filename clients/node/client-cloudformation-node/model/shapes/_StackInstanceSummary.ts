import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackInstanceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSetId: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    Account: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusReason: {
      shape: {
        type: "string"
      }
    }
  }
};
