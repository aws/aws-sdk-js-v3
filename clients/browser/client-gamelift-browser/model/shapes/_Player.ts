import { _PlayerAttributeMap } from "./_PlayerAttributeMap";
import { _LatencyMap } from "./_LatencyMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Player: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlayerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlayerAttributes: {
      shape: _PlayerAttributeMap
    },
    Team: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LatencyInMs: {
      shape: _LatencyMap
    }
  }
};
