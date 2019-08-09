import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UtteranceData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    utteranceString: {
      shape: {
        type: "string",
        min: 1
      }
    },
    count: {
      shape: {
        type: "integer"
      }
    },
    distinctUsers: {
      shape: {
        type: "integer"
      }
    },
    firstUtteredDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastUtteredDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
