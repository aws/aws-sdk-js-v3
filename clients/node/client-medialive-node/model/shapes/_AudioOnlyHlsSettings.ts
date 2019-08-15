import { _InputLocation } from "./_InputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioOnlyHlsSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioGroupId: {
      shape: {
        type: "string"
      },
      locationName: "audioGroupId"
    },
    AudioOnlyImage: {
      shape: _InputLocation,
      locationName: "audioOnlyImage"
    },
    AudioTrackType: {
      shape: {
        type: "string"
      },
      locationName: "audioTrackType"
    }
  }
};
