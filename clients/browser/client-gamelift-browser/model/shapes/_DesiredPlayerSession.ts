import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DesiredPlayerSession: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlayerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlayerData: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
