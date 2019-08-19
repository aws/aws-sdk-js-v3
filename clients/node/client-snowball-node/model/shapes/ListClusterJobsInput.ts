import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClusterJobsInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId"],
  members: {
    ClusterId: {
      shape: {
        type: "string",
        min: 39
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
