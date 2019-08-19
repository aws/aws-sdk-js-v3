import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SatelliteListItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    }
  }
};
