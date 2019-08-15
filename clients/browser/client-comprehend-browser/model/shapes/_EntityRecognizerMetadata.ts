import { _EntityRecognizerEvaluationMetrics } from "./_EntityRecognizerEvaluationMetrics";
import { _EntityRecognizerMetadataEntityTypesList } from "./_EntityRecognizerMetadataEntityTypesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityRecognizerMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
      shape: _EntityRecognizerEvaluationMetrics
    },
    EntityTypes: {
      shape: _EntityRecognizerMetadataEntityTypesList
    }
  }
};
