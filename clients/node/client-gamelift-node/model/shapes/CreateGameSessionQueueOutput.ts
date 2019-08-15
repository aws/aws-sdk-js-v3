import { _GameSessionQueue } from "./_GameSessionQueue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGameSessionQueueOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSessionQueue: {
      shape: _GameSessionQueue
    }
  }
};
