import { _Feedback } from "./_Feedback";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Problem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Title: {
      shape: {
        type: "string"
      }
    },
    Insights: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    AffectedResource: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    SeverityLevel: {
      shape: {
        type: "string"
      }
    },
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    },
    Feedback: {
      shape: _Feedback
    }
  }
};
