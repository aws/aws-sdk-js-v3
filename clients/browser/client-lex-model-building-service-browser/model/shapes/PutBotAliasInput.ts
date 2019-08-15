import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutBotAliasInput: _Structure_ = {
  type: "structure",
  required: ["name", "botVersion", "botName"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "name"
    },
    description: {
      shape: {
        type: "string"
      }
    },
    botVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    botName: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "botName"
    },
    checksum: {
      shape: {
        type: "string"
      }
    }
  }
};
