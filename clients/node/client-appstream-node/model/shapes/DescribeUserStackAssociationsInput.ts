import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserStackAssociationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
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
