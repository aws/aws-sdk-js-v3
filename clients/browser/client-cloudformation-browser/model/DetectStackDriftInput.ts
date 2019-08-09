import { _LogicalResourceIds } from "./_LogicalResourceIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectStackDriftInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LogicalResourceIds: {
      shape: _LogicalResourceIds
    }
  }
};
