import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReserveContactInput: _Structure_ = {
  type: "structure",
  required: [
    "endTime",
    "groundStation",
    "missionProfileArn",
    "satelliteArn",
    "startTime"
  ],
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
    missionProfileArn: {
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
    tags: {
      shape: _TagsMap
    }
  }
};
