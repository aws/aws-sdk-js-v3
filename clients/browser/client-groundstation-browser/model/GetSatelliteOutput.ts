import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSatelliteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dateCreated: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    noradSatelliteID: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    satelliteArn: {
      shape: {
        type: "string"
      }
    },
    satelliteId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagsMap
    }
  }
};
