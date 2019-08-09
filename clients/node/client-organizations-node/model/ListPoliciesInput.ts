import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["Filter"],
  members: {
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
