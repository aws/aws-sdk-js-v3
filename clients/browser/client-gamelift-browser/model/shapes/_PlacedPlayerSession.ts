import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlacedPlayerSession: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlayerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlayerSessionId: {
      shape: {
        type: "string"
      }
    }
  }
};
