import { _ActivityType } from "./_ActivityType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityTypeInfo: _Structure_ = {
  type: "structure",
  required: ["activityType", "status", "creationDate"],
  members: {
    activityType: {
      shape: _ActivityType
    },
    status: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    deprecationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
