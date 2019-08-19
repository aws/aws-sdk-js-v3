import { _PlayerIdList } from "./_PlayerIdList";
import { _PlayerDataMap } from "./_PlayerDataMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlayerSessionsInput: _Structure_ = {
  type: "structure",
  required: ["GameSessionId", "PlayerIds"],
  members: {
    GameSessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlayerIds: {
      shape: _PlayerIdList
    },
    PlayerDataMap: {
      shape: _PlayerDataMap
    }
  }
};
