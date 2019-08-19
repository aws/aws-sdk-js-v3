import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGameSessionLogUrlInput: _Structure_ = {
  type: "structure",
  required: ["GameSessionId"],
  members: {
    GameSessionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
