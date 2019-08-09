import { _SentimentScore } from "./_SentimentScore";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectSentimentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
