import { _MetricDefinitionList } from "./_MetricDefinitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterAlgorithmSpecification: _Structure_ = {
  type: "structure",
  required: ["TrainingInputMode"],
  members: {
    TrainingImage: {
      shape: {
        type: "string"
      }
    },
    TrainingInputMode: {
      shape: {
        type: "string"
      }
    },
    AlgorithmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MetricDefinitions: {
      shape: _MetricDefinitionList
    }
  }
};
