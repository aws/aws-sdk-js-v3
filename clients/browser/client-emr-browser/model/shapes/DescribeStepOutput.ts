import { _Step } from "./_Step";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStepOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Step: {
      shape: _Step
    }
  }
};
