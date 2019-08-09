import { _HyperParameters } from "./_HyperParameters";
import { _InputDataConfig } from "./_InputDataConfig";
import { _OutputDataConfig } from "./_OutputDataConfig";
import { _ResourceConfig } from "./_ResourceConfig";
import { _StoppingCondition } from "./_StoppingCondition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrainingJobDefinition: _Structure_ = {
  type: "structure",
  required: [
    "TrainingInputMode",
    "InputDataConfig",
    "OutputDataConfig",
    "ResourceConfig",
    "StoppingCondition"
  ],
  members: {
    TrainingInputMode: {
      shape: {
        type: "string"
      }
    },
    HyperParameters: {
      shape: _HyperParameters
    },
    InputDataConfig: {
      shape: _InputDataConfig
    },
    OutputDataConfig: {
      shape: _OutputDataConfig
    },
    ResourceConfig: {
      shape: _ResourceConfig
    },
    StoppingCondition: {
      shape: _StoppingCondition
    }
  }
};
