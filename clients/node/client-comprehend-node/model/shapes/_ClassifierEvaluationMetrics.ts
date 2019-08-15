import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClassifierEvaluationMetrics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Accuracy: {
      shape: {
        type: "float"
      }
    },
    Precision: {
      shape: {
        type: "float"
      }
    },
    Recall: {
      shape: {
        type: "float"
      }
    },
    F1Score: {
      shape: {
        type: "float"
      }
    }
  }
};
