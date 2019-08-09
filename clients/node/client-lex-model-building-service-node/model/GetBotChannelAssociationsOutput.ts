import { _BotChannelAssociationList } from "./_BotChannelAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotChannelAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    botChannelAssociations: {
      shape: _BotChannelAssociationList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
