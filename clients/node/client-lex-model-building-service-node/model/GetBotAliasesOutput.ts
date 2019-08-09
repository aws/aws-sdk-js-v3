import { _BotAliasMetadataList } from "./_BotAliasMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotAliasesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BotAliases: {
      shape: _BotAliasMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
