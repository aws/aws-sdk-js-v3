import { _HyperParameters } from "./_HyperParameters";
import { _HyperParameterAlgorithmSpecification } from "./_HyperParameterAlgorithmSpecification";
import { _InputDataConfig } from "./_InputDataConfig";
import { _VpcConfig } from "./_VpcConfig";
import { _OutputDataConfig } from "./_OutputDataConfig";
import { _ResourceConfig } from "./_ResourceConfig";
import { _StoppingCondition } from "./_StoppingCondition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterTrainingJobDefinition: _Structure_ = {
  type: "structure",
  required: [
    "AlgorithmSpecification",
    "RoleArn",
    "OutputDataConfig",
    "ResourceConfig",
    "StoppingCondition"
  ],
  members: {
    StaticHyperParameters: {
      shape: _HyperParameters
    },
    AlgorithmSpecification: {
      shape: _HyperParameterAlgorithmSpecification
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
    VpcConfig: {
      shape: _VpcConfig
    },
    OutputDataConfig: {
      shape: _OutputDataConfig
    },
    ResourceConfig: {
      shape: _ResourceConfig
    },
    StoppingCondition: {
      shape: _StoppingCondition
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
