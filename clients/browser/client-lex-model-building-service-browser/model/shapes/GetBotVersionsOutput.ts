import { _BotMetadataList } from "./_BotMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bots: {
      shape: _BotMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
