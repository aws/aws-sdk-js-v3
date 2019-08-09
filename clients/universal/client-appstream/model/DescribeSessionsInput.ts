import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSessionsInput: _Structure_ = {
  type: "structure",
  required: ["StackName", "FleetName"],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserId: {
      shape: {
        type: "string",
        min: 2
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    AuthenticationType: {
      shape: {
        type: "string"
      }
    }
  }
};
