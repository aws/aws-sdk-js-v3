import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHyperParameterTuningJobInput: _Structure_ = {
  type: "structure",
  required: ["HyperParameterTuningJobName"],
  members: {
    HyperParameterTuningJobName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
