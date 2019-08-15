import { _Video } from "./_Video";
import { _NotificationChannel } from "./_NotificationChannel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartContentModerationInput: _Structure_ = {
  type: "structure",
  required: ["Video"],
  members: {
    Video: {
      shape: _Video
    },
    MinConfidence: {
      shape: {
        type: "float"
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NotificationChannel: {
      shape: _NotificationChannel
    },
    JobTag: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
