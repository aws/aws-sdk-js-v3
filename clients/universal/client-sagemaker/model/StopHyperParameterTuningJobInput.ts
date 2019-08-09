import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopHyperParameterTuningJobInput: _Structure_ = {
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
