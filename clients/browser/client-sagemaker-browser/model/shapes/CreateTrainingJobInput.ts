import { _HyperParameters } from "./_HyperParameters";
import { _AlgorithmSpecification } from "./_AlgorithmSpecification";
import { _InputDataConfig } from "./_InputDataConfig";
import { _OutputDataConfig } from "./_OutputDataConfig";
import { _ResourceConfig } from "./_ResourceConfig";
import { _VpcConfig } from "./_VpcConfig";
import { _StoppingCondition } from "./_StoppingCondition";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrainingJobInput: _Structure_ = {
  type: "structure",
  required: [
    "TrainingJobName",
    "AlgorithmSpecification",
    "RoleArn",
    "OutputDataConfig",
    "ResourceConfig",
    "StoppingCondition"
  ],
  members: {
    TrainingJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HyperParameters: {
      shape: _HyperParameters
    },
    AlgorithmSpecification: {
      shape: _AlgorithmSpecification
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
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
    VpcConfig: {
      shape: _VpcConfig
    },
    StoppingCondition: {
      shape: _StoppingCondition
    },
    Tags: {
      shape: _TagList
    },
    EnableNetworkIsolation: {
      shape: {
        type: "boolean"
      }
    },
    EnableInterContainerTrafficEncryption: {
      shape: {
        type: "boolean"
      }
    }
  }
};
