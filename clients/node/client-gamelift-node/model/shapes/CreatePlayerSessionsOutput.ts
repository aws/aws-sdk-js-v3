import { _PlayerSessionList } from "./_PlayerSessionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlayerSessionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlayerSessions: {
      shape: _PlayerSessionList
    }
  }
};
