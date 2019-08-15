import { _Video } from "./_Video";
import { _NotificationChannel } from "./_NotificationChannel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartFaceSearchInput: _Structure_ = {
  type: "structure",
  required: ["Video", "CollectionId"],
  members: {
    Video: {
      shape: _Video
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FaceMatchThreshold: {
      shape: {
        type: "float"
      }
    },
    CollectionId: {
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
