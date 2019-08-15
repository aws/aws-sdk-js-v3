import { _StringMap } from "./_StringMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PostTextInput: _Structure_ = {
  type: "structure",
  required: ["botName", "botAlias", "userId", "inputText"],
  members: {
    botName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "botName"
    },
    botAlias: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "botAlias"
    },
    userId: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "userId"
    },
    sessionAttributes: {
      shape: _StringMap
    },
    requestAttributes: {
      shape: _StringMap
    },
    inputText: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
