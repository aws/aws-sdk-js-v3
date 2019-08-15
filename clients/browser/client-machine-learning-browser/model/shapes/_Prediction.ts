import { _ScoreValuePerLabelMap } from "./_ScoreValuePerLabelMap";
import { _DetailsMap } from "./_DetailsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Prediction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    predictedLabel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    predictedValue: {
      shape: {
        type: "float"
      }
    },
    predictedScores: {
      shape: _ScoreValuePerLabelMap
    },
    details: {
      shape: _DetailsMap
    }
  }
};
