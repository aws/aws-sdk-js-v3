import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityTypesEvaluationMetrics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
