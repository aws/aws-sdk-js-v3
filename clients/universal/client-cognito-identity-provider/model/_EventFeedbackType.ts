import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventFeedbackType: _Structure_ = {
  type: "structure",
  required: ["FeedbackValue", "Provider"],
  members: {
    FeedbackValue: {
      shape: {
        type: "string"
      }
    },
    Provider: {
      shape: {
        type: "string"
      }
    },
    FeedbackDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
