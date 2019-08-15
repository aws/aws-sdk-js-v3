import { Structure as _Structure_ } from "@aws-sdk/types";

export const PostContentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    contentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    intentName: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-lex-intent-name"
    },
    slots: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-lex-slots"
    },
    sessionAttributes: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-lex-session-attributes"
    },
    message: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "x-amz-lex-message"
    },
    messageFormat: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-lex-message-format"
    },
    dialogState: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-lex-dialog-state"
    },
    slotToElicit: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-lex-slot-to-elicit"
    },
    inputTranscript: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-lex-input-transcript"
    },
    audioStream: {
      shape: {
        type: "blob",
        streaming: true
      }
    }
  },
  payload: "audioStream"
};
