import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectStackResourceDriftInput: _Structure_ = {
  type: "structure",
  required: ["StackName", "LogicalResourceId"],
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
    }
  }
};
