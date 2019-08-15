import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStaleSecurityGroupsInput: _Structure_ = {
  type: "structure",
  required: ["VpcId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    }
  }
};
