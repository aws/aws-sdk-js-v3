import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStepInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId", "StepId"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    StepId: {
      shape: {
        type: "string"
      }
    }
  }
};
