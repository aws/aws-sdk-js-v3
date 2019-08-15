import { _MetricDefinitionList } from "./_MetricDefinitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlgorithmSpecification: _Structure_ = {
  type: "structure",
  required: ["TrainingInputMode"],
  members: {
    TrainingImage: {
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
    TrainingInputMode: {
      shape: {
        type: "string"
      }
    },
    MetricDefinitions: {
      shape: _MetricDefinitionList
    }
  }
};
