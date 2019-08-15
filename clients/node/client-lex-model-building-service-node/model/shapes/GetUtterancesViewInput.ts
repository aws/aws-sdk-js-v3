import { _BotVersions } from "./_BotVersions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUtterancesViewInput: _Structure_ = {
  type: "structure",
  required: ["botName", "botVersions", "statusType"],
  members: {
    botName: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "botname"
    },
    botVersions: {
      shape: _BotVersions,
      location: "querystring",
      locationName: "bot_versions"
    },
    statusType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status_type"
    }
  }
};
