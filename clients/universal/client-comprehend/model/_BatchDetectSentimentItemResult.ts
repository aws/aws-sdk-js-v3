import { _SentimentScore } from "./_SentimentScore";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDetectSentimentItemResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Index: {
      shape: {
        type: "integer"
      }
    },
    Sentiment: {
      shape: {
        type: "string"
      }
    },
    SentimentScore: {
      shape: _SentimentScore
    }
  }
};
