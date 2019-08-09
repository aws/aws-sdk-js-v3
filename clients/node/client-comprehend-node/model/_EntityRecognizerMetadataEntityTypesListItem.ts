import { _EntityTypesEvaluationMetrics } from "./_EntityTypesEvaluationMetrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityRecognizerMetadataEntityTypesListItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    EvaluationMetrics: {
      shape: _EntityTypesEvaluationMetrics
    },
    NumberOfTrainMentions: {
      shape: {
        type: "integer"
      }
    }
  }
};
