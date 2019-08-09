import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesForTargetInput: _Structure_ = {
  type: "structure",
  required: ["TargetId", "Filter"],
  members: {
    TargetId: {
      shape: {
        type: "string"
      }
    },
    Filter: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
