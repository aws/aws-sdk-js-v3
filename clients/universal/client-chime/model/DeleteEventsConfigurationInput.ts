import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEventsConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "BotId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    BotId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "botId"
    }
  }
};
