import { _GameSession } from "./_GameSession";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGameSessionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSession: {
      shape: _GameSession
    }
  }
};
