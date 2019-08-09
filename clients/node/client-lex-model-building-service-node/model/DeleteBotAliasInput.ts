import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBotAliasInput: _Structure_ = {
  type: "structure",
  required: ["name", "botName"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "name"
    },
    botName: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "botName"
    }
  }
};
