import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUsersInput: _Structure_ = {
  type: "structure",
  required: ["AuthenticationType"],
  members: {
    AuthenticationType: {
      shape: {
        type: "string"
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
