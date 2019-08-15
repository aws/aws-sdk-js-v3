import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroundStationData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    groundStationId: {
      shape: {
        type: "string"
      }
    },
    groundStationName: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
      }
    }
  }
};
