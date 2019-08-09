import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SentimentScore: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Positive: {
      shape: {
        type: "float"
      }
    },
    Negative: {
      shape: {
        type: "float"
      }
    },
    Neutral: {
      shape: {
        type: "float"
      }
    },
    Mixed: {
      shape: {
        type: "float"
      }
    }
  }
};
