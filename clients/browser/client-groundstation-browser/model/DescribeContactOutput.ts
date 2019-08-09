import { _Elevation } from "./_Elevation";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeContactOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    contactId: {
      shape: {
        type: "string"
      }
    },
    contactStatus: {
      shape: {
        type: "string"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    },
    groundStation: {
      shape: {
        type: "string"
      }
    },
    maximumElevation: {
      shape: _Elevation
    },
    missionProfileArn: {
      shape: {
        type: "string"
      }
    },
    postPassEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    prePassStartTime: {
      shape: {
        type: "timestamp"
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
