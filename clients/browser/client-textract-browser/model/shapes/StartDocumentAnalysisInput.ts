import { _DocumentLocation } from "./_DocumentLocation";
import { _FeatureTypes } from "./_FeatureTypes";
import { _NotificationChannel } from "./_NotificationChannel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDocumentAnalysisInput: _Structure_ = {
  type: "structure",
  required: ["DocumentLocation", "FeatureTypes"],
  members: {
    DocumentLocation: {
      shape: _DocumentLocation
    },
    FeatureTypes: {
      shape: _FeatureTypes
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
