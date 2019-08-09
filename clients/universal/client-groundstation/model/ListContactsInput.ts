import { _StatusList } from "./_StatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListContactsInput: _Structure_ = {
  type: "structure",
  required: ["endTime", "startTime", "statusList"],
  members: {
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    groundStation: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    missionProfileArn: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    satelliteArn: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    statusList: {
      shape: _StatusList
    }
  }
};
