import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHyperParameterTuningJobOutput: _Structure_ = {
  type: "structure",
  required: ["HyperParameterTuningJobArn"],
  members: {
    HyperParameterTuningJobArn: {
      shape: {
        type: "string"
      }
    }
  }
};
