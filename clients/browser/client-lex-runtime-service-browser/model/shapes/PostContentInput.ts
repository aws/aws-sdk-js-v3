import { Structure as _Structure_ } from "@aws-sdk/types";

export const PostContentInput: _Structure_ = {
  type: "structure",
  required: ["botName", "botAlias", "userId", "contentType", "inputStream"],
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
      shape: {
        type: "string",
        sensitive: true
      },
      location: "header",
      locationName: "x-amz-lex-session-attributes"
    },
    requestAttributes: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "header",
      locationName: "x-amz-lex-request-attributes"
    },
    contentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    accept: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Accept"
    },
    inputStream: {
      shape: {
        type: "blob",
        streaming: true
      }
    }
  },
  payload: "inputStream"
};
