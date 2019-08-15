import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDetectorInput: _Structure_ = {
  type: "structure",
  required: ["Enable"],
  members: {
    Enable: {
      shape: {
        type: "boolean"
      },
      locationName: "enable"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    FindingPublishingFrequency: {
      shape: {
        type: "string"
      },
      locationName: "findingPublishingFrequency"
    },
    Tags: {
      shape: _TagMap,
      locationName: "tags"
    }
  }
};
