import { _ClassifierEvaluationMetrics } from "./_ClassifierEvaluationMetrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClassifierMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NumberOfLabels: {
      shape: {
        type: "integer"
      }
    },
    NumberOfTrainedDocuments: {
      shape: {
        type: "integer"
      }
    },
    NumberOfTestDocuments: {
      shape: {
        type: "integer"
      }
    },
    EvaluationMetrics: {
      shape: _ClassifierEvaluationMetrics
    }
  }
};
