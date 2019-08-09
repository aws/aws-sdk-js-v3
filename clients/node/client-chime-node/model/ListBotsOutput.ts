import { _BotList } from "./_BotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBotsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bots: {
      shape: _BotList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
