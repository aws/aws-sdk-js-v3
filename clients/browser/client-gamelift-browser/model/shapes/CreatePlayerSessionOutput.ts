import { _PlayerSession } from "./_PlayerSession";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlayerSessionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlayerSession: {
      shape: _PlayerSession
    }
  }
};
