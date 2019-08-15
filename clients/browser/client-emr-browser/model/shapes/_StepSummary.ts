import { _HadoopStepConfig } from "./_HadoopStepConfig";
import { _StepStatus } from "./_StepStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Config: {
      shape: _HadoopStepConfig
    },
    ActionOnFailure: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: _StepStatus
    }
  }
};
