import { _EventRiskType } from "./_EventRiskType";
import { _ChallengeResponseListType } from "./_ChallengeResponseListType";
import { _EventContextDataType } from "./_EventContextDataType";
import { _EventFeedbackType } from "./_EventFeedbackType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthEventType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventId: {
      shape: {
        type: "string"
      }
    },
    EventType: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    EventResponse: {
      shape: {
        type: "string"
      }
    },
    EventRisk: {
      shape: _EventRiskType
    },
    ChallengeResponses: {
      shape: _ChallengeResponseListType
    },
    EventContextData: {
      shape: _EventContextDataType
    },
    EventFeedback: {
      shape: _EventFeedbackType
    }
  }
};
