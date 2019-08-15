import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Notification: _Structure_ = {
  type: "structure",
  required: ["NotificationType", "ComparisonOperator", "Threshold"],
  members: {
    NotificationType: {
      shape: {
        type: "string"
      }
    },
    ComparisonOperator: {
      shape: {
        type: "string"
      }
    },
    Threshold: {
      shape: {
        type: "float"
      }
    },
    ThresholdType: {
      shape: {
        type: "string"
      }
    },
    NotificationState: {
      shape: {
        type: "string"
      }
    }
  }
};
