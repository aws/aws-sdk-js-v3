import { _DocumentLocation } from "./_DocumentLocation";
import { _NotificationChannel } from "./_NotificationChannel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDocumentTextDetectionInput: _Structure_ = {
  type: "structure",
  required: ["DocumentLocation"],
  members: {
    DocumentLocation: {
      shape: _DocumentLocation
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobTag: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NotificationChannel: {
      shape: _NotificationChannel
    }
  }
};
