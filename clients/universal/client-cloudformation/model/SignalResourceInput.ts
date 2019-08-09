import { Structure as _Structure_ } from "@aws-sdk/types";

export const SignalResourceInput: _Structure_ = {
  type: "structure",
  required: ["StackName", "LogicalResourceId", "UniqueId", "Status"],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LogicalResourceId: {
      shape: {
        type: "string"
      }
    },
    UniqueId: {
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
