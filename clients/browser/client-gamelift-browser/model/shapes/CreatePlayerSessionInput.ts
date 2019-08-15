import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlayerSessionInput: _Structure_ = {
  type: "structure",
  required: ["GameSessionId", "PlayerId"],
  members: {
    GameSessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
