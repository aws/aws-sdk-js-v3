import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackSetSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    },
    StackSetId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
