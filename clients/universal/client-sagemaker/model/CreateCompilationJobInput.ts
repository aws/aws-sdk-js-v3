import { _InputConfig } from "./_InputConfig";
import { _OutputConfig } from "./_OutputConfig";
import { _StoppingCondition } from "./_StoppingCondition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCompilationJobInput: _Structure_ = {
  type: "structure",
  required: [
    "CompilationJobName",
    "RoleArn",
    "InputConfig",
    "OutputConfig",
    "StoppingCondition"
  ],
  members: {
    CompilationJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    InputConfig: {
      shape: _InputConfig
    },
    OutputConfig: {
      shape: _OutputConfig
    },
    StoppingCondition: {
      shape: _StoppingCondition
    }
  }
};
