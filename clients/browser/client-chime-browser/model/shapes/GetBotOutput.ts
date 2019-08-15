import { _Bot } from "./_Bot";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bot: {
      shape: _Bot
    }
  }
};
