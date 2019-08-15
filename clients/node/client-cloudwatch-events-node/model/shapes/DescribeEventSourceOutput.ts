import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventSourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    CreatedBy: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    ExpirationTime: {
      shape: {
        type: "timestamp"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    }
  }
};
