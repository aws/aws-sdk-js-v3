import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlayerLatency: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlayerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RegionIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LatencyInMilliseconds: {
      shape: {
        type: "float"
      }
    }
  }
};
