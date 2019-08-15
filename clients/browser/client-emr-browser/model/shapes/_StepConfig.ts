import { _HadoopJarStepConfig } from "./_HadoopJarStepConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepConfig: _Structure_ = {
  type: "structure",
  required: ["Name", "HadoopJarStep"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    ActionOnFailure: {
      shape: {
        type: "string"
      }
    },
    HadoopJarStep: {
      shape: _HadoopJarStepConfig
    }
  }
};
