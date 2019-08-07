import { _QuietTime } from "./_QuietTime";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Schedule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndTime: {
      shape: {
        type: "string"
      }
    },
    Frequency: {
      shape: {
        type: "string"
      }
    },
    IsLocalTime: {
      shape: {
        type: "boolean"
      }
    },
    QuietTime: {
      shape: _QuietTime
    },
    StartTime: {
      shape: {
        type: "string"
      }
    },
    Timezone: {
      shape: {
        type: "string"
      }
    }
  }
};
